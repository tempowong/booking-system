import Box from "@component/Box";
import Button from "@component/buttons/Button";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import DashboardLayout from "@component/layout/CustomerDashboardLayout";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import TableRow from "@component/TableRow";
import Typography, { H3, H5, Small } from "@component/Typography";
import React from "react";
import Icon from "@component/icon/Icon";
import Link from "next/link";

const Profile = () => {
    return (
        <div>
            <Grid container spacing={6}>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Grid container spacing={6}>
                        {list.map((item) => (

                            <Grid item lg={6} sm={6} xs={6} key={item.title}>
                                <Link href={item.href} key={item.title}>
                                    <FlexBox
                                        as={Card}
                                        flexDirection="column"
                                        alignItems="center"
                                        height="100%"
                                        p="1rem 1.25rem"
                                    >
                                        <Icon className="icon" variant="large" color={item.color}>
                                            {item.icon}
                                        </Icon>
                                        <H5 color="#626262" my="0px" fontWeight="600">
                                            {item.title}
                                        </H5>
                                    </FlexBox>
                                </Link>
                            </Grid>

                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
};

const list = [
    {
        title: "我的預約",
        icon: "profile-mybookings",
        href: "/mybookings",
        color: "#0DBEE4"
    },
    {
        title: "我的訊息",
        icon: "profile-mymessages",
        href: "/mymessage",
        color: "#0DBEE4"
    },
    {
        title: "診治記錄",
        icon: "profile-myrecords",
        href: "/myrecords",
        color: "#0DBEE4"
    },
    {
        title: "個人資料",
        icon: "profile-myinfo",
        href: "/myinfo",
        color: "#0DBEE4"
    },
    {
        title: "設定",
        icon: "profile-mysettings",
        href: "/mysettings",
        color: "#0DBEE4"
    },
    {
        title: "邀請好友",
        icon: "profile-invitation",
        href: "/invite",
        color: "#0DBEE4"
    },
];

Profile.layout = DashboardLayout;

export default Profile;
