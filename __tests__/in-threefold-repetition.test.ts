import { Chess } from '../src/chess'
import { split } from './utils'

test('in_threefold_repetition', () => {
  /* Fischer - Petrosian, Buenos Aires, 1971 */
  const fen = '8/pp3p1k/2p2q1p/3r1P2/5R2/7P/P1P1QP2/7K b - - 2 30'
  const moves = split('Qe5 Qh5 Qf6 Qe2 Re5 Qd3 Rd5 Qe2')

  const chess = new Chess(fen)
  moves.forEach((move) => {
    expect(chess.in_threefold_repetition()).toBe(false)
    expect(chess.move(move)).not.toBeNull()
  })
  expect(chess.in_threefold_repetition()).toBe(true)
})

test('in_threefold_repetition - 2', () => {
  const moves = 'Nf3 Nf6 Ng1 Ng8 Nf3 Nf6 Ng1 Ng8'.split(/\s+/)
  const chess = new Chess()
  moves.forEach((move) => {
    expect(chess.in_threefold_repetition()).toBe(false)
    expect(chess.move(move)).not.toBeNull()
  })
  expect(chess.in_threefold_repetition()).toBe(true)
})
