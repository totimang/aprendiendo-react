import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:'totimang',
        name: 'Rodrigo M.',
        isFollowing: true
    },
    {
        userName:'TodoCode',
        name: 'Todo Code',
        isFollowing: false
    },
    {
        userName:'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) =>(
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}