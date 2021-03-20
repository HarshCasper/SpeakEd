import React from 'react';
import {Container,Wrapper,Row,Column,Link,Title} from './styles/footer';
export default function Footer({children,...restProps})
{
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper=function FooterWrapper({children,...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}
//row
Footer.Row=function FooterRow({children,...restProps}){
    return <Row {...restProps}>{children}</Row>
};
//column
Footer.Column=function FooterColumn({children,...restProps}){
    return <Column {...restProps}>{children}</Column>
};
//link
Footer.Link=function FooterLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
};
//title
Footer.Title=function FooterTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
};