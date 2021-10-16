import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { Counter } from './Counter'

//This was used for understanding the ways of testing
//This is not my actual assignment

it('should increment counter if Increment button is pressed', () => {
  render(<Counter />)

  expect(document.querySelector('p')).toHaveTextContent('Count is: 0')

  fireEvent.click(screen.getByText('Increment'))

  expect(document.querySelector('p')).toHaveTextContent('Count is: 1')
})

it('should decrement counter if Decrement button is pressed', () => {
  render(<Counter />)

  expect(document.querySelector('p')).toHaveTextContent('Count is: 0')

  fireEvent.click(screen.getByText('Decrement'))

  expect(document.querySelector('p')).toHaveTextContent('Count is: -1')
})