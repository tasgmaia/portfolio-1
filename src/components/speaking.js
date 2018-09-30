import React from 'react'

const Speaking = () => (
    <div>
      <Talk
        title="A experiência de usuário da mobilidade urbana - Cidades melhores para pedalar e viver"
        context="Interaction Latin America (proposta), 2018"
        link="https://docs.google.com/presentation/d/1oXXcIGezvJleuqwEpXEjieuFVvWEYMyXmhYCCkGNp-o/edit#slide=id.g3ea9d9667f_0_143"
      />

      <Talk
        title="Rage, rage against the dying of the Design System - Morte e vida de um sistema para empoderar um ecossistema."
        context="Interaction Latin America (proposta), 2018"
        link="https://drive.google.com/open?id=10VxokY3c1onxm67WUD_flPh5tlxyydBy"
      />

      <Talk
        title="É possível estacionar a bike de boa?"
        context="Bicicultura, 2018"
        link="https://docs.google.com/presentation/d/1JJvtK1kPmfCg-g06vtmPoQNBgT9BdHZQCGxbXaqZAm8/edit#slide=id.p"
      />

      <Talk
        title="Sprint de Criação de Multimídias Livres"
        context="Fórum Internacional Software Livre, 2016"
        link="https://musica-libre.org/sprint_multimedia_2016_1"
      />

      <Talk
        title="O primeiro web app PWA para ciclistas"
        context="Google IO Extended, 2015"
        link="https://docs.google.com/presentation/d/18DyziybC2Benf43OMAd5T7611QULd9oWA1L60rzvrsM/edit#slide=id.p"
      />

      <Talk
        title="React no Mundo Real - Relatos do maior site de aluguel de carros do mundo"
        context="React Meetup, 2014"
        link="https://docs.google.com/presentation/d/1RnbQ5beTuvtUFzk6KX3kJXrF25i2WN-ZMcXbhlelktw/edit#slide=id.p"
      />

      {/* <Talk
        title="Podcasts"
        context="Isobar Lightning Talks, 2017"
        link="https://docs.google.com/presentation/d/1hzKk7USBEVX9m8HlrZD5rRb8sp-VXWFYuyebHe5kzJ8/edit?usp=sharing"
      /> */}

      {/* <Talk
        title="Slow TV"
        context="Isobar Lightning Talks, 2016"
        link="https://www.youtube.com/playlist?list=PLEQfAlS3xFFXkBT0lAzsiHvX1OKuH1qv5"
      />

      <Talk
        title="Fallacies"
        context="Isobar Lightning Talks, 2016"
        link="https://docs.google.com/presentation/d/1989zLiju0njGpa4oTJz3J80kEIODHYTTTfmP6UYX35M/edit#slide=id.p"
      /> */}

      <Talk
        title="O que aprendi com as Artes Marciais"
        context="Desconferência UFRGS - 2013"
        link="https://docs.google.com/presentation/d/1djDV4rN1B3gyP-ODDjxwNMGlvgfExUyxe47l8n7tI_w/edit#slide=id.p"
      />
    </div>
)

class Talk extends React.Component {
  render() {
    const { title, context, link } = this.props;

    return (
      <div className="mv4">
        <div className="fw5 f5 mv1">
          {/* {title} */}
          <a className="link pretty-link dim" href={link}>
            {title}
          </a>
        </div>
        
        <div className="gray f6">
          {context}
        </div>
        
        {/* <div className="mv2">
          <a className="link pretty-link" href={link}>
            Slides
          </a>
        </div> */}
      </div>
    )
  }
}

export default Speaking