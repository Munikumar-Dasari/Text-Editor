import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  Container,
  LeftContainer,
  Heading,
  Image,
  RightContainer,
  ToolsList,
  Tools,
  Button,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <AppContainer>
        <Container>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ToolsList>
              <Tools>
                <Button
                  data-testid="bold"
                  color={boldLogo}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </Tools>
              <Tools>
                <Button
                  data-testid="italic"
                  color={italicLogo}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </Tools>
              <Tools>
                <Button
                  data-testid="underline"
                  color={underlineLogo}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </Tools>
            </ToolsList>
            <TextArea
              isBold={isBold}
              isUnderline={isUnderline}
              isItalic={isItalic}
            />
          </RightContainer>
        </Container>
      </AppContainer>
    )
  }
}
export default Home
