import { FC } from 'react';
import TagsStyle from './TagsStyle';
import Typography from 'components/Typography';


export interface TagModel {
    id: string;
    name: string;
}
interface ITags {
    tags: TagModel[],
    onTagDelete?: (id: string) => void;
}

const Tags: FC<ITags> = (props) => {
    const { tags, onTagDelete } = props;
    const classes = TagsStyle();
    return (
        <div className={classes.tagsContent}>
            {tags.map((item) =>
                <div className={classes.tag} key={item.id}>
                    <Typography variant="body1" component="span">{item.name}</Typography>
                    {onTagDelete &&
                        <div className={classes.tagClose} onClick={() => onTagDelete(item.id)}>+</div>
                    }
                </div>
            )}
        </div>
    );
}

export default Tags;