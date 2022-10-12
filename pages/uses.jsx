import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import React from 'react';

export default function Uses() {
    return (
        <>
            <Meta
                title='Uses'
                url={`https://0xnaka.dev/uses`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <PageTitle className='mb-6'>
                    Programming is my hobby, I spend time on NFT
                    </PageTitle>
                    <section className='prose dark:prose-invert lg:prose-lg'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                        </p>
                        <h2>Workstation</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate 
                        </p>
                        <div className='lg:ml-6'>
                            <h4>ASUS TUF GAMING (2020)</h4>
                            <p>
                            When I was at school I didn't have a laptop because I was constrained by costs, so when I had more money I bought this laptop because I wanted to experience the experience of using a gaming laptop.
                            </p>
                            <h4>I'm using POCO F4 and Iphone 14 pro</h4>
                            <p>
                            I like both Android and IOS
                            </p>
                        </div>
                        <h2>Development tools</h2>
                        <p>
                            I feel this is the most part of all, because I care
                            and are very serious about what I am interested in.
                        </p>
                        <div className='lg:ml-6'>
                            <h4>Visual Studio Code</h4>
                            <p>
                                Right now, this is my main text editor, nothing
                                else but this. Before using this editor, I used
                                sublime text which was about 6 years old.
                                Starting from early 2020, I started using visual
                                studio code and I think, I can be comfortable
                                here even now.
                            </p>
                            <h4>Laravel Forge</h4>
                            <p>
                                I'm too lazy to mess around with the server, so
                                I'm thinking of just subscribing to Laravel
                                Forge. I took the "Hobby" package for now which
                                was $12/mo, previously I used "Growth" which was
                                $19/mo, but I think it's useless for now, so I
                                downgrade.
                            </p>
                            <h4>Figma</h4>
                            <p>
                                For creating thumbnail series or open graph
                                images, <strong>Figma</strong> is the tool I use
                                and the only one. Previously I used{' '}
                                <strong>Sketch</strong>, but you know it's not
                                free. But Figma do.
                            </p>
                            <h4>Browser</h4>
                            <p>
                                For work I use <strong>Firefox</strong>, and if
                                I just want to browse, I choose{' '}
                                <strong>Safari</strong>.
                            </p>
                        </div>
                        <h2>Productivity</h2>
                        <p>
                            I feel this is the most part of all, because I care
                            and are very serious about what I am interested in.
                        </p>
                        <div className='lg:ml-6'>
                            <h4>Notes</h4>
                            <p>
                                I know there are better tools than this, but you
                                know, I'm comfortable with this. so it's hard
                                for me to move.
                            </p>
                        </div>
                        <p>
                         Thank you for taking the time to read
                        </p>
                    </section>
                </Container>
            </div>
        </>
    );
}
