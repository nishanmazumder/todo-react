import React from 'react';
import Section from './Section';
import Heading from './Heading';

export default function Post() {
   return (
      <Section>
         <Heading>Heading 1</Heading>
         <Section>
            <Heading>Heading 2</Heading>
            <Section>
               <Heading>Heading 3</Heading>
            </Section>
         </Section>
      </Section>
   )
}
