import Link from 'next/link'
import { useContext } from 'react';
import { ConfigContext } from '@context/config'

const List = () => {
    const { isAmp } = useContext(ConfigContext);

    return (
        <div>
            <h3>Related Articles</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link href="/news/2">
                        <a >Article 2</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/3">
                        <a href="">Article 3</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/4">
                        <a href="">Article 4</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/5">
                        <a href="">Article 5</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/6">
                        <a href="">Article 6</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/7">
                        <a href="">Article 7</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/8">
                        <a href="">Article 8</a>
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link href="/news/9">
                        <a href="">Article 9</a>
                    </Link>
                </li>
            </ul>
        </div>
       
    )
}

export default List;