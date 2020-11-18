import React from 'react'
import { Icon } from 'semantic-ui-react'

function generateGuid() {
  let result = ''
  for (let j = 0; j < 32; j += 1) {
    if (j === 8 || j === 12 || j === 16 || j === 20) {
      result += '-'
    }
    const i = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase()
    result += i
  }
  return result
}

export default {
  start: false,
  cards: [
    {
      key: generateGuid(),
      name: 'coffee',
      isPicked: false,
      element: <Icon name="coffee" size="massive" color="red" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'coffee',
      isPicked: false,
      element: <Icon name="coffee" size="massive" color="red" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'chess knight',
      isPicked: false,
      element: <Icon name="chess knight" size="massive" color="orange" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'chess knight',
      isPicked: false,
      element: <Icon name="chess knight" size="massive" color="orange" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'bell',
      isPicked: false,
      element: <Icon name="bell" size="massive" color="yellow" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'bell',
      isPicked: false,
      element: <Icon name="bell" size="massive" color="yellow" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'ambulance',
      isPicked: false,
      element: <Icon name="ambulance" size="massive" color="olive" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'ambulance',
      isPicked: false,
      element: <Icon name="ambulance" size="massive" color="olive" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'camera',
      isPicked: false,
      element: <Icon name="camera" size="massive" color="green" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'camera',
      isPicked: false,
      element: <Icon name="camera" size="massive" color="green" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'heart',
      isPicked: false,
      element: <Icon name="heart" size="massive" color="teal" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'heart',
      isPicked: false,
      element: <Icon name="heart" size="massive" color="teal" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'favorite',
      isPicked: false,
      element: <Icon name="favorite" size="massive" color="blue" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'favorite',
      isPicked: false,
      element: <Icon name="favorite" size="massive" color="blue" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'lemon',
      isPicked: false,
      element: <Icon name="lemon" size="massive" color="violet" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
    {
      key: generateGuid(),
      name: 'lemon',
      isPicked: false,
      element: <Icon name="lemon" size="massive" color="violet" />,
      hidden: <Icon name="envelope" size="massive" color="black" />,
    },
  ],
}
