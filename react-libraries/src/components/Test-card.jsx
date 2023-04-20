import MapIcon from "@mui/icons-material/Map";
import { tours } from '../data';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material/';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        transition: 'var(--transition)',
        background: 'var(--clr-grey-10)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
    },

    info: {
        padding: '1.25rem 1.5rem',
    },

    title: {
        marginBottom: '0.75rem',
        lineHeight: '1.25',
    },

    text: {
        marginBottom: '0.75rem',
        lineHeight: '1.25',
    },

    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    footerText: {
        lineHeight: '0',
        marginBottom: '0',
        textTransform: 'capitalize',
        color: 'var(--clr-primary-5)',
    },

    footerIcon: {
        marginRight: '0.25rem',
    },

    footerLocation: {
        display: 'flex',
        alignItems: 'center',
    },

    button: {
        textTransform: 'uppercase',
        background: 'var(--clr-primary-5)',
        color: 'var(--clr-white)',
        padding: '0.375rem 0.75rem',
        letterSpacing: 'var(--spacing)',
        display: 'inline-block',
        fontWeight: '700',
        transition: 'var(--transition)',
        fontSize: '0.875rem',
        border: '2px solid transparent',
        cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    }
})

export default function TestCard() {
    const classes = useStyles();
    
    return(
        <div className='tour-center featured-center'>
                {tours.map((tour) => {

                    return(
                        <>
                        <Card className={classes.root} key={tour.id}>
                            <CardMedia component='img' image={tour.image} alt='tour' />

                            <CardContent className={classes.info}>
                                <Typography className={classes.title} variant='h4' component='h4'>
                                    {tour.title}
                                </Typography>
                                <Typography className={classes.text} variant='textbody' component='p'>
                                    {tour.text}
                                </Typography>
                            </CardContent>

                            <CardContent className={classes.footer}>
                                <Typography className={`${classes.footerLocation} ${classes.footerText}`} variant='textbody' component='p'>
                                    <span className={classes.footerIcon}>
                                        <MapIcon />
                                    </span>
                                    {tour.location}
                                </Typography>
                                <Typography className={classes.footerText} variant='textbody' component='p'>
                                    {tour.duration} days
                                </Typography>
                                <Typography className={classes.footerText} variant='textbody' component='p'>
                                    from ${tour.price}
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* <Button className={classes.button} variant="contained">Click me</Button> */}
                        </>
                    )
                })}
            </div>
    )
};

// export default function TestCard() {
    
//     return(
//         <div className='tour-center featured-center'>
//                 {tours.map((tour) => {

//                     return(
//                         <Card key={tour.id}>
//                             <CardMedia component='img' image={tour.image} alt='tour' />

//                             <CardContent>
//                                 <Typography variant='h4' component='h4'>
//                                     {tour.title}
//                                 </Typography>
//                                 <Typography variant='textbody' component='p'>
//                                     {tour.text}
//                                 </Typography>
//                             </CardContent>

//                             <CardContent>
//                                 <Typography variant='textbody' component='p'>
//                                     <span>
//                                         <MapIcon />
//                                     </span>
//                                     {tour.location}
//                                 </Typography>
//                                 <Typography variant='textbody' component='p'>
//                                     {tour.duration} days
//                                 </Typography>
//                                 <Typography variant='textbody' component='p'>
//                                     from ${tour.price}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     )
//                 })}
//             </div>
//     )
// };
