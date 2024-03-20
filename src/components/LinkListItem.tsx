import { DialogContentText } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DateTimeFormatOptions } from "intl";
import { BarChart, Clipboard, QrCode, Share, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../firebase/auth";
import Button from "./Button";
import QrGenerator from "./QrGenerator";

const LinkListItem: React.FC<{
  id: number;
  Title: string;
  ActualURl: string;
  date: string;
  ShortUrl: string;
  clicks: number;
  handleDelete: (id: number) => void;
}> = (props) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { authUser } = useAuth();

  const { id, Title, ActualURl, date, ShortUrl, clicks } = props;
  const config: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatedDate = new Date(date).toLocaleDateString("en-US", config);

  const isShareSupported = typeof navigator.share === "function";

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = (_event: React.MouseEvent) => {
    setOpen(false);
  };

  const setDeleteDialogVisibility = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };

  const oneDeleteHandler = async () => {
    const response = await fetch(
      `https://shorts.zictracks.com/api/shorturl/${id}?key=${authUser?.uid}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      toast.error("Network error. Please try again");
      return;
    }

    const responseData = await response.json();
    if (!responseData.status) {
      toast.error("Can't delete link at the moment. Please try later");
      return;
    }

    props.handleDelete(id);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleCopyToClipBoard = async () => {
    await navigator.clipboard.writeText(ShortUrl);
  };

  const handleShareUrl = async () => {
    await navigator.share({
      url: ShortUrl,
    });
  };
  return (
    <div className="bg-white w-full rounded-md p-5 my-5">
      <h4 className="font-bold mb-4">{Title}</h4>
      <a
        className="text-blue-700 hover:text-blue-900"
        href={ActualURl}
        target="__blank"
      >
        {ActualURl}
      </a>
      <p>{formatedDate}</p>
      <hr className="my-3" />
      <div>
        <div>
          <a href={ShortUrl} target="__blank">
            {ShortUrl}
          </a>
          <div className=" mt-3 flex gap-3 justify-between">
            <div className="flex gap-4">
              {isShareSupported && (
                <Share
                  className="hover:text-blue-800"
                  onClick={handleShareUrl}
                />
              )}
              <Clipboard
                className="hover:text-blue-800"
                onClick={handleCopyToClipBoard}
              />
              <QrCode onClick={handleClickOpen("paper")} />
              <Trash2Icon onClick={setDeleteDialogVisibility} />
            </div>
            <div className="border border-blue-700 flex p-2 rounded text-blue-800 font-bold">
              <BarChart />
              <p>
                <span className="bg-blue-800 text-white p-1 rounded">
                  {clicks}
                </span>{" "}
                clicks
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main div ends here */}

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">QR Code</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <QrGenerator url={ShortUrl} fileName="Qr_Code" qrCodeSize={700} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={setDeleteDialogVisibility}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete link"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this link? Deleted links cannot be
            recovered.
          </DialogContentText>
        </DialogContent>
        <div className="cta_buttons ml-2">
          <Button className="btn-secondary text-red-700" onclick={setDeleteDialogVisibility}>
            Disagree
          </Button>
          <Button className="btn-primary py-2" onclick={oneDeleteHandler}>
            Agree
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default LinkListItem;
