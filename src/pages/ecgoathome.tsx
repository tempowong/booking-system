import Section1 from "@component/ecgoat/Section1";
import Section2 from "@component/ecgoat/Section2";
import Section4 from "@component/ecgoat/Section4";
import Section5 from "@component/ecgoat/Section5";

import { Fragment } from "react";
import AppLayout from "../components/layout/AppLayout";

const ECGIndexPage = () => {
    return (
        <Fragment>
            <Section1 />
            <Section2 />
            <Section4 />
            <Section5 />
        </Fragment>
    );
};

ECGIndexPage.layout = AppLayout;

export default ECGIndexPage;
