import { socials } from '@/libs/socials';
import React from 'react';
import path from 'path';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { POSTS_PATH } from '@/libs/helpers';
import Articles from '@/components/Articles';
import PageTitle from '@/components/PageTitle';
import ProjectAtHome from '@/components/ProjectAtHome';
import Head from 'next/head';
import Container from '@/components/Container';
import styles from '@/components/styles';
import clsx from 'clsx';
import Link from 'next/link';
import Meta from '@/components/Meta';

export default function index({ articles }) {
    return (
        <>
            <Meta
                title='Naka'
                url={`https://0xnaka.dev/articles`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div
                        id='articles'
                        className='flex flex-col gap-6 lg:flex-row lg:gap-10'
                    >
                        <div className='w-full lg:w-2/3'>
                            <div className='mb-6 rounded-2xl bg-gray-100 p-4 dark:bg-gray-800/50 lg:-ml-10 lg:p-10'>
                                <PageTitle className='mb-3 lg:mb-6'>
                                Programming is my hobby, I spend time on NFT
                                </PageTitle>
                                <section className='prose dark:prose-invert lg:prose-lg'>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                                    </p>
                                </section>
                                <div className='mt-6'>
                                    <Link href='/uses'>
                                        <a className='5 rounded-full bg-white px-4 py-2 font-semibold shadow dark:bg-gray-700 dark:text-white'>
                                            Read more
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <PageTitle>My Articles</PageTitle>
                                <p
                                    className={clsx(
                                        styles.textMuted,
                                        'mt-2 text-xl'
                                    )}
                                >
                                    Everything that is on my mind, I will write
                                    here.
                                </p>
                            </div>
                            <div className='flex max-w-xl flex-col'>
                                <Articles articles={articles} />
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3'>
                            <div
                                className={clsx(
                                    // styles.flexCenter,

                                    'flex items-center justify-end gap-1'
                                )}
                            >
                                <span className={styles.textMuted}>
                                    Follow me ⎯⎯⎯⎯
                                </span>
                                {socials.map(({ url, icon: Icon }, i) => (
                                    <Link href={url} key={i}>
                                        <a
                                            className={clsx(
                                                styles.flexCenter,
                                                'h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800'
                                            )}
                                        >
                                            <Icon
                                                stroke={1}
                                                className='h-5 w-5'
                                            />
                                        </a>
                                    </Link>
                                ))}
                            </div>
                            <div className='mt-4'>
                                <ProjectAtHome />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            articles: getArticles()
                .slice(0, 9)
                .map((post) => post.meta),
        },
    };
}

const getSlugs = () => {
    const paths = sync(`${POSTS_PATH}/*.mdx`);

    return paths.map((path) => {
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        const [slug, _ext] = fileName.split('.');
        return slug;
    });
};

const getPostFromSlug = (slug) => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(postPath);
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? 'slug',
            title: data.title ?? slug,
            tags: data?.tags?.sort(),
            date: data?.date?.toString(),
        },
    };
};

const getArticles = () => {
    return getSlugs()
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
};
