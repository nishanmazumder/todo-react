import React from 'react';
import Section from './Section';
import Heading from './Heading';

export default function Post() {
   return (
      <Section>
         <Heading level={1}>Heading 1</Heading>
         <Section>
            <Heading level={2}>Heading 2</Heading>
            <Section>
               <Heading level={3}>Heading 3</Heading>
            </Section>
         </Section>
      </Section>
   )
}
