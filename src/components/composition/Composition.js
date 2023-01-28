import React from 'react'
import Text from './Text'
import Emoji from './Emoji'
import Brackets from './Brackets'


export default class Composition extends React.Component {
  render() {
    return (
      <div>

        <Emoji>
            {({addEmoji})=> (
                <Brackets>
                    {({bracket})=>(<Text addEmoji={addEmoji} bracket={bracket}/>)}
                </Brackets>
            )}
        </Emoji>

      </div>
    )
  }
}
