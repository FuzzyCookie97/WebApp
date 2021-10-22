import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { MyComponent } from "./MyComponent"


  it('<p> Should change to false string during onClick', () => {
    render(<MyComponent />)
  
    expect(document.querySelector('p')).toHaveTextContent('')

    fireEvent.click(screen.getByText('false'))

    expect(document.querySelector('p')).toHaveTextContent('false')
  })

  it('<p> Should change to true string during onClick', () => {
    render(<MyComponent />)
  
    expect(document.querySelector('p')).toHaveTextContent('')

    fireEvent.click(screen.getByText('true'))

    expect(document.querySelector('p')).toHaveTextContent('true')
  })

  it('<p> should change between true and false strings during onClick', () => {
    render(<MyComponent />)
  
    expect(document.querySelector('p')).toHaveTextContent('')
  
    fireEvent.click(screen.getByText('true'))
  
    expect(document.querySelector('p')).toHaveTextContent('true')

    fireEvent.click(screen.getByText('false'))

    expect(document.querySelector('p')).toHaveTextContent('false')
    
  })