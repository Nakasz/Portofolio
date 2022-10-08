import React from 'react';
import PageTitle from '@/components/PageTitle';
import MyPictureWithSocial from '@/components/MyPictureWithSocial';
import Container from '@/components/Container';
import styles from '@/components/styles';
import Meta from '@/components/Meta';
export default function About() {
    return (
        <>
            <Meta
                title='About Naka'
                url='https://0xnaka.dev/about'
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className='flex flex-col-reverse gap-10 lg:flex-row'>
                        <div className='w-full lg:w-2/3'>
                            <PageTitle className='mb-6'>
                            I'm Naka, a Blockchain and Cryptocurrency Developer from Indonesian
                            </PageTitle>
                            <section className='prose dark:prose-invert lg:prose-lg'>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate


                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate


                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate


                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate


                                </p>
                            </section>
                        </div>
                        <div className='w-full lg:w-1/3'>
                            <MyPictureWithSocial />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
