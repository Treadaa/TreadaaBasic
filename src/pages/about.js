import React from 'react'
import Layout from '../layouts/index'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

export default function AboutPage() {
	return (
		<Layout>
			<Article>
				<ArticleContent title="About">
					<p>
						Treadaa is a Players Stock Trading platform where you can also buy
						NFTs
					</p>
					<p>There for you, Always.</p>
					<p>This platform is based on Blockchain Technology</p>
				</ArticleContent>

				<ArticleMedia>
					<img
						src="https://picsum.photos/420/640?grayscale"
						alt="Lorem Picsum"
					/>
				</ArticleMedia>
			</Article>
		</Layout>
	)
}
