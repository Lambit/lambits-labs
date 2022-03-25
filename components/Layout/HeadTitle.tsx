import Head from "next/head";
import React from "react";
import { APP_NAME } from "../../util/constants";

// Display APP_NAME in Head

export const HeadTitle = () => {
    return (
        <Head>
            <title>
                { APP_NAME }
            </title>
        </Head>
    )
};