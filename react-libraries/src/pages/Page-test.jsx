import Title from '../components/Title';
import TestCard from '../components/Test-card';
import TestQuery from '../components/Test-query';

export default function TestPage() {
    
    return (
        
        <section className='page-test'>
            <Title title="testing" subTitle="libraries" />

            <h2>Material UI</h2>

            <TestCard />

            <h2>React Query</h2>

            <TestQuery />
        
        </section>
    )
} 
