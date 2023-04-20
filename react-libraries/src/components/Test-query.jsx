import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function TestQuery() {
    return(
        <QueryClientProvider client={queryClient}>
            <Pokemons />
        </QueryClientProvider>
    )
}

function Pokemons() {    
    const { data } = useQuery({
        queryKey: ['pokemons'], 
        queryFn: () => 
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => data.results)
    });

    return(
        <div>
            <h3>Pokemons:</h3>

            <ul>
                {data?.map(pokemon =>
                    (<li key={pokemon.id}>{pokemon.name}</li>))}
            </ul>
        </div>
    )
}
