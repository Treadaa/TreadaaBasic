import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Treadaa: Future is here"
				content="We are here to put regulations into a sprouting industry to make it safe and secure for all types of investors especially the cricket fans for we are capable of providing justice to the credence and trust they exhibit on us and earn their loyalty through our brilliant app."
				illustration={HeroIllustration}
			/>
		</Layout>
	)
}
