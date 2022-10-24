import { FC } from "react";
import { Stack } from '@mui/material';
import Typography from "components/Typography";
import SectionTitleStyle from './SectionTitleStyle';

interface ISectionTitle {
    title: string;
    redTitle?: string,
    description?: string
}

const SectionTitle: FC<ISectionTitle> = (props) => {
    const { title, redTitle, description } = props;
    const classes = SectionTitleStyle();
    return (<Stack direction="column">
        <Typography variant="h6" component="h6" className={classes.redTypo}>{redTitle}</Typography>
        <Typography variant="h3Bold" component="h5" className={classes.blackTypo}>{title}</Typography>
        <div className={classes.curveDoubleLine}></div>
        <Typography variant="body2" component="p" className={classes.description}>{description}</Typography>
    </Stack>);
}

export default SectionTitle;