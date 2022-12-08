import Box from "@component/Box";
import Section3 from "@component/ecgoat/Section2";
import Section1 from "@component/ecgoat/Section1";
import Section2 from "@component/ecgoat/Section2";
import Section4 from "@component/ecgoat/Section4";
import Section5 from "@component/ecgoat/Section5";

import { Fragment } from "react";
import Container from "../components/Container";
import AppLayout from "../components/layout/AppLayout";

const ECGIndexPage = () => {
    return (
        <Fragment>
            <Container my="2rem">
                <Section1 />
                <Box mb="3.75rem">
                    <Section2 />
                </Box>
                <Section3 />
                <Section4 />
                <Section5 />
            </Container>
        </Fragment>
    );
};

ECGIndexPage.layout = AppLayout;

export default ECGIndexPage;
