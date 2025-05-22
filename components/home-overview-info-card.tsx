import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {green} from "@mui/material/colors";
import Card from "@mui/material/Card";
import * as React from "react";
import {Box, Stack} from "@mui/material";

interface HomeOverviewInfoCardProps {
    title: string;
    icon: React.ReactNode;
    currentValue: number;

    // possible max value of this info card
    maxValue?: number;

    // does max value need to be shown
    showMaxValue: boolean;

    // value changed comparing to a certain date
    // +20, -100, +20.89%, -10.55%
    delta: string;

    //which date or a period of time is comparing to.
    compareTo: string;
    key: number;


}

export default function HomeOverviewInfoCard(props: HomeOverviewInfoCardProps) {
    const {title, icon, currentValue, maxValue, showMaxValue, delta, compareTo} = props;

    return (
        <Grid size={{xs: 12, md: 6, lg: 3}}>
            <Card sx={{flexGrow: 1, flex: 1}}>
                <CardContent>
                    <Stack justifyContent="space-between" direction={"column"}>
                        <Box>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography gutterBottom component="span">
                                    {title}
                                </Typography>
                                {icon}
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" alignItems="baseline">
                                <Typography variant={"h6"} color="primary">
                                    <b>{currentValue.toLocaleString()}</b>
                                </Typography>
                                {showMaxValue &&
                                    <Typography component="span" color="primary">
                                        &nbsp;/{maxValue?.toLocaleString()}
                                    </Typography>
                                }
                            </Stack>
                            <Box>
                                <Typography component="span" sx={{color: green[600]}}>
                                    <b>{delta}</b>
                                </Typography>
                                <Typography component="span" color="primary" marginLeft={1}>
                                    vs {compareTo}
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>

    )
}