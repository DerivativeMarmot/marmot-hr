import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {green} from "@mui/material/colors";
import GroupsIcon from "@mui/icons-material/Groups";
import Card from "@mui/material/Card";
import * as React from "react";
import {Stack} from "@mui/material";

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
    const { title, icon, currentValue, maxValue, showMaxValue, delta, compareTo } = props;

    return (
        <Card sx={{ width: '100%', maxWidth: '250px'}}>
            <CardContent>
                <Grid container justifyContent="space-between">
                    <Grid spacing={8}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Stack direction="row" alignItems="baseline" justifyContent="space-between">
                            <Typography variant="h4" component="span" color="primary">
                                <b>{currentValue.toLocaleString()}</b>
                            </Typography>
                            {showMaxValue &&
                                <Typography component="span" color="primary" marginLeft={0.5}>
                                    / 10,000
                                </Typography>
                            }
                        </Stack>
                        <div>
                            <Typography component="span" sx={{color: green[600]}}>
                                <b>{delta}</b>
                            </Typography>
                            <Typography component="span" color="primary" marginLeft={1}>
                                vs {compareTo}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid spacing={4}>
                        {icon}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}