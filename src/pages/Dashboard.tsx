import { CircularProgress } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link, Link2, MousePointer, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import DashboardCard from "../components/DashboardCard";
import LinkListItem from "../components/LinkListItem";
import Nav from "../components/Nav";
import URLForm from "../components/URLForm";
import { useAuth } from "../firebase/auth";
import DashboardData from "../modules/DashboardData";
import RecentLink from "../modules/RecentLink";

const Dashboard = () => {
  const [recentLinks, setRecentLinks] = useState<RecentLink[]>([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalLinks, setTotalLinks] = useState(0);
  const [linksThisMonth, setLinksThisMonth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const { authUser } = useAuth();

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (!authUser?.uid) {
        return;
      }
      setIsLoading(true);
      const response = await fetch(
        `https://shorts.zictracks.com/api/dashboard?key=${authUser?.uid}`
      );
      if (!response.ok) {
        toast.error("Network error");
        return;
      }

      const responseData: DashboardData = await response.json();
      if (!responseData.status) {
        toast.error("Can't fetch data at the moment");
        return;
      }
      const {
        data: { RecentLinks, TotalClicks, LinksThisMonth, TotalLinks },
      } = responseData;
      setRecentLinks(RecentLinks);
      setTotalClicks(TotalClicks);
      setTotalLinks(TotalLinks);
      setLinksThisMonth(LinksThisMonth);
      setIsLoading(false);
    }

    fetchData();
  }, [authUser?.uid]);

  const addToList = (data: RecentLink) => {
    setRecentLinks((prev) => {
      return prev.concat(data);
    });
    setTotalLinks(totalLinks + 1);
    setLinksThisMonth(linksThisMonth + 1);
  };

  const onDeleteHandler = (id: number) => {
    const filteredLinks = recentLinks.filter((recentLink) => {
      return recentLink.id !== id;
    });

    setRecentLinks(filteredLinks);
  };

  return (
    <>
      <Nav />
      <div className="bg-white lg:w-11/12 lg:rounded-md lg:mx-auto my-10 p-8 flex lg:flex-nowrap flex-wrap gap-1 place-content-center shadow-md border">
        <DashboardCard
          className="bg-gradient-to-bl from-cyan-200 to-cyan-400"
          heading="ALL URLS"
          value={totalLinks}
        >
          <Link className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-violet-400 to-purple-300"
          heading="TOTAL CLICKS"
          value={totalClicks}
        >
          <MousePointer className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-sky-400 to-blue-500"
          heading="LINKS ADDED THIS MONTH"
          value={linksThisMonth}
        >
          <Link2 className="text-black" />
        </DashboardCard>
        <DashboardCard
          className="bg-gradient-to-r from-green-200 to-blue-500"
          heading="ALL URLS"
          value={30}
        >
          <Link className="text-black" />
        </DashboardCard>
      </div>

      <div className="lg:w-11/12 lg:rounded-md lg:mx-auto justify-between flex flex-wrap">
        <Button
          onclick={handleClickOpen("paper")}
          className="btn-primary rounded-sm bg-black flex"
        >
          New Link <Plus className="ml-2" />
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">QR Code</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <URLForm className="w-full" updateLinksList={addToList} />
          </DialogContent>
        </Dialog>
        <div className=" w-full border-black">
          {isLoading && recentLinks.length < 1 && (
            <CircularProgress className="mt-5 block mx-auto" />
          )}
          {recentLinks.length > 0 &&
            recentLinks.map((recentLink) => {
              const { Title, ActualUrl, id, created_at, clicks, ShortUrl } =
                recentLink;
              return (
                <LinkListItem
                  key={id}
                  id={id}
                  Title={Title}
                  clicks={clicks}
                  ActualURl={ActualUrl}
                  date={created_at}
                  ShortUrl={ShortUrl}
                  handleDelete={onDeleteHandler}
                />
              );
            })}
          {!isLoading && recentLinks.length > 0 && (
            <NavLink
              className="btn w-36 btn-primary mx-auto block mb-5"
              to={"/links"}
            >
              See More
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
