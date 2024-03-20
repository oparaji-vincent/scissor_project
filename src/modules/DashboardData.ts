import RecentLink from "./RecentLink"

type DashboardData = {
    data: {
        "TotalLinks": number,
        "TotalClicks": number,
        "LinksThisMonth": number,
        "RecentLinks": RecentLink[]
    },
    status: boolean
}

export default DashboardData;