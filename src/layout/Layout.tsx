import React from 'react';

import Sidebar from './Sidebar';
import Header from './Header';

import layoutStyle from '../../styles/layout.style';

export default function Layout(props: IProps) {
    return (
        <>
            <Header/>
            <Sidebar/>
            <div className={'content'}>
                {props.children}
            </div>
            <style jsx>{layoutStyle}</style>
            <style>{`
                .header {
                background: #222830;
                color: #9E4DE7;
                }
                .sidebar {
                background: #222830;
                box-shadow: 20px 0px 60px #0D131A;
                }
                .content {
                background: #0D131A;
                }
            `}</style>
        </>
    )
}

interface IProps {
    children: any
}
