"use client";

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
    // 게시글 내용이 바뀔때를 알기 위해 content를 넘겨받는다.
    content
) => {
    const [activeId, setActiveId] = useState("");
    // heading element를 담아서 사용하기 위한 ref
    const headingElementsRef = useRef;

    useEffect(() => {
        // 새로고침 없이 다른 게시물로 이동할 경우를 대비한 초기화
        headingElementsRef.current = {};

        // callback은 intersectionObserver로 관찰할 대상 비교 로직
        const callback = (headings) => {
            // 모든 제목을 reduce로 순회해서 headingElementsRef.current에 키 밸류 형태로 할당.
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);

            // 화면 상단에 보이고 있는 제목을 찾아내기 위한 로직
            const visibleHeadings = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];

                // isIntersecting이 true라면 visibleHeadings에 push한다.
                if (headingElement.isIntersecting) {
                    visibleHeadings.push(headingElement);
                }
            });

            // observer가 관찰하는 영역에 여러개의 제목이 있을때 가장 상단의 제목을 알아내기 위한 함수
            const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id);

            if (visibleHeadings.length === 1) {
                // 화면에 보이고 있는 제목이 1개라면 해당 element의 target.id를 setActiveId로 set해준다.
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                // 2개 이상이라면 sort로 더 상단에 있는 제목을 set해준다.
                const sortedVisibleHeadings = visibleHeadings.sort((a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id));
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        // IntersectionObserver에 callback과 옵션을 생성자로 넘겨 주고 새로 생성한다.
        const observer = new IntersectionObserver(callback, {
            // rootMargin 옵션을 통해 화면 상단에서 네비바 영역(-64px)을 빼고, 위에서부터 -40%정도 영역만 관찰한다.
            rootMargin: "0px",
        });

        // 제목 태그들을 다 찾아낸다.
        const headingElements = Array.from(document.querySelectorAll("h1, h2, h3")).filter((tag) => tag.id !== "pageTitle");

        // 이 요소들을 observer로 관찰한다.
        headingElements.forEach((element) => observer.observe(element));

        // 컴포넌트 언마운트시 observer의 관찰을 멈춘다.
        // return () => observer.disconnect();

        // content 내용이 바뀔때를 대비하여 deps로 content를 넣어준다.
    }, [content]);

    return [activeId, setActiveId];
};

export default ({ post }) => {
    const titles = post.split(`\n`).filter((t) => t.includes("# "));

    const result = titles
        .filter((str) => str[0] === "#")
        .map((item) => {
            // #의 갯수에 따라 제목의 크기가 달라지므로 갯수를 센다.
            let count = item.match(/#/g)?.length;
            if (count) {
                // 갯수에 따라 목차에 그릴때 들여쓰기 하기위해 *10을 함.
                count = (count - 1) * 5;
            }

            // 제목의 내용물만 꺼내기 위해 '# '을 기준으로 나누고, 백틱과 공백을 없애주고 count와 묶어서 리턴
            return { title: item.split("# ")[1].replace(/`/g, "").trim(), count };
        });

    const [a] = useIntersectionObserver(result);

    const clickHander = (e) => {
        //히스토리 저장안할래!
        window.location.replace(`#${e.target.innerText}`);
        window.scrollTo({
            top: window.scrollY - 100,
            behavior: "smooth",
        });
    };

    const [activeId, setActiveId] = useIntersectionObserver(post);

    return (
        <>
            <div className="p-5">Toc</div>
            <ul
                className="shadowBottom w-full p-5 rounded-[10px] h-[600px] pb-[50px] overflow-scroll"
                style={{
                    overflowY: "scroll",
                }}
            >
                {result.map((item, index) => {
                    return (
                        <li
                            key={item + index}
                            className={(item.count === 0 ? "font-bold" : "") + " my-1 hover:bg-gray p-1 rounded-sm cursor-pointer hover:bg-highlight"}
                            style={{ marginLeft: `${item.count * 3}px` }}
                            onClick={clickHander}
                            id={item.title}
                        >
                            <span
                                // href={`#${item.title}`}

                                className={(activeId === item.title ? `text-[#577CF1]` : `text-[#aeaeae]`) + ` text-sm`}
                            >
                                {item.title}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
