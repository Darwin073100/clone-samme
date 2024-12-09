import React from 'react'
import { Header } from '../containers/Header'
import { Main } from '../containers/Main'
import { MainHeader } from "../components/MainHeader";
import { PostSection } from "../components/PostSection";
import { InformationAside } from "../components/InformationAside";
import { MainContent } from "../containers/MainContent";
import { Post } from '../components/Post';

function App() {
  return (
    <>
      <Header />
      <Main>
        <MainHeader />
        <MainContent>
            <PostSection>
              <Post figure={"red"}/>
              <Post figure={"purple"}/>
              <Post figure={"yellow"}/>
            </PostSection>
            <InformationAside />
        </MainContent>
      </Main>
    </>
  )
}

export { App }