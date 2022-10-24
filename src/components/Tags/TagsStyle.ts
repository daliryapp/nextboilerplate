import { makeStyles } from '_core/theme';

const TagsStyle = makeStyles(({ spacing, palette: { neutral, accent, onPrimary } }) => ({
    tagsContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    tag: {
        padding: spacing(2, 3),
        backgroundColor: neutral[100],
        border: '1px solid',
        borderColor: neutral[300],
        borderRadius: 24,
        marginRight: spacing(2),
        marginBottom: spacing(2),
        display: 'flex',
        alignItems: 'center'

    },
    tagClose: {
        borderRadius: 50,
        width: 18,
        height: 18,
        backgroundColor: accent.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: onPrimary.main,
        fontWeight: 'bold',
        transform: 'rotate(45deg)',
        marginLeft: spacing(2),
        cursor: 'pointer'
    }
}));

export default TagsStyle;