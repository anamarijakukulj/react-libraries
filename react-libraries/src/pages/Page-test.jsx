import MapIcon from "@mui/icons-material/Map";
import { tours } from '../data';
import Title from '../components/Title';
import { Card, CardContent, CardMedia, Typography } from '@mui/material/';
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
    }
})

export default function TestPage() {
    const classes = useStyles();

    return (
        <section className='page'>
            <Title title="featured" subTitle="tours" />

            <div className='tour-center featured-center'>
                {tours.map((tour) => {

                    return(
                        <Card className={classes.root}>
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
                    )
                })}
            </div>
        </section>
    )
} 
