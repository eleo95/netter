import { render, screen } from '@testing-library/react'
import App from '@/components/App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Netter/i,
        level: 1
      })
    ).toBeInTheDocument()

    // expect(
    //   screen.getByRole('link', {
    //     name: /start building/i
    //   })
    // ).toBeInTheDocument()

    // expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container).toBeInTheDocument()
  })
})
