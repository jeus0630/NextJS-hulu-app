import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <header className={''}>
            <h1>This is the Header</h1>
            <Image src={'https://links.papareact.com/ua6'} width={200} height={100} className={"object-contain"}></Image>
        </header>
    );
};

export default Header;
