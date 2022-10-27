import { makeStyles } from '_core/theme';

const useMenuListStyle = makeStyles(({ spacing, palette: { onPrimary, neutral, primary, error } }) => ({


    menuListHeader: {
        height: 55,
        width: 280,
        position: 'relative',
    },

    menuHeaderTitle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3f2311',
        // boxShadow: 'inset 0px -68px 8px -59px rgba(255,255,255,1)'
    },
    menuListItem: {
        padding: spacing(2, 2),
        borderTop: `1px solid ${neutral[200]}`,

    },
    menuListImage: {
        width: 50,
        height: 50,
        borderRadius: 6,
        overflow: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    menuListPrice: {
        color: error.main
    },
    menuListRemoveIconButton: {
        '& path': {
            stroke: error.main
        }
    },
    menuListScrollWrapper: {
        overflowY: 'auto',
        height: '85vh'
    },
    menuListTextContainer: {
        maxWidth: 175
    },
    dialog: {
        '& .MuiDialog-paper': {
            border: `1px solid ${neutral[400]}`,
            width: '100%'
        }
    },
    dialogTitle: {
        padding: spacing(3)
    },
    dialogActions: {
        justifyContent: 'flex-start',
        '& button': {
            minWidth: 20,
            marginLeft: spacing(3)
        }
    },
    noOrderYet: {
        height: '75vh'
    },
    draweBotton: {
        backgroundColor: onPrimary.main,
        borderTop: `1px solid ${neutral[200]}`,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingRight: spacing(2),
        paddingLeft: spacing(2),
        paddingTop: spacing(2)

    },
    sumOfPrice: {
        color: error.main
    }
})
    , { classNamePrefix: 'MenuList' });

export default useMenuListStyle;