type Props = {
    nickname: string;
};

export default function WebringButtons({ nickname }: Props) {
    const url_base = `https://webring.otomir23.me/${nickname}`;
    const url_data = {
        next: `${url_base}/next`,
        prev: `${url_base}/prev`
    };

    return (
        <div className="flex justify-center gap-3 text-main">
            <a href={url_data.prev} className="hover:text-secondary">back</a>
            <p>| webring |</p>
            <a href={url_data.next} className="hover:text-secondary">next</a>
        </div>
    )
}