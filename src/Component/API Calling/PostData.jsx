import { useEffect, useState } from "react";

const PostData = () => {
    const [postData, setPostData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((data) => {
                console.log("resp", data);
                setPostData(data);
                setSearchData(data);
                console.log("postData", postData);
            }).catch((err) => {
                console.log(err);
                setPostData([]);
            })
    }, [])

    console.log("postData 1", postData);

    const handleSearch = (e) => {
        const seachResult = postData.filter(item =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchData(seachResult);
    };

    return (
        <>
            <h3>Post Data</h3>
            <input placeholder="serch here" onChange={handleSearch} />
            <ul>
                {searchData.map((item) => {
                    return (
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default PostData;