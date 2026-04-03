import { useParams, useSearchParams } from 'react-router-dom'

const APP_STORE_URL = 'https://apps.apple.com/app/id6756892049'

const BG = '#0A0A0F'
const CARD_BG = 'rgba(255,255,255,0.05)'
const BORDER = 'rgba(255,255,255,0.08)'
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  if (isNaN(r) || isNaN(g) || isNaN(b)) return '128, 128, 128'
  return `${r}, ${g}, ${b}`
}

export default function SpoolTagPage() {
  const { spoolId } = useParams<{ spoolId: string }>()
  const [params] = useSearchParams()

  const brand    = params.get('b') ?? 'Unknown Brand'
  const material = params.get('m') ?? 'Filament'
  const name     = params.get('n') ?? 'Unknown Colour'
  const rawHex   = params.get('h') ?? '808080'
  const hex      = `#${rawHex.replace('#', '')}`
  const rgb      = hexToRgb(hex)

  const hasData = params.has('b') || params.has('m')

  return (
    <div style={{
      minHeight: '100vh',
      background: BG,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
      fontFamily: FONT,
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: `rgba(${rgb}, 0.12)`,
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%',
        maxWidth: 420,
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: 24,
        padding: '32px 28px',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Colour swatch */}
        <div style={{
          width: 64,
          height: 64,
          borderRadius: 18,
          background: hex,
          marginBottom: 24,
          boxShadow: `0 8px 24px rgba(${rgb}, 0.4)`,
          border: `1px solid rgba(${rgb}, 0.3)`,
        }} />

        {hasData ? (
          <>
            <div style={{
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 4,
              fontWeight: 500,
            }}>
              {brand}
            </div>
            <div style={{
              fontSize: 26,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 4,
              lineHeight: 1.2,
            }}>
              {name}
            </div>
            <div style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 28,
            }}>
              {material} · {hex.toUpperCase()}
            </div>
          </>
        ) : (
          <div style={{
            fontSize: 18,
            fontWeight: 600,
            color: '#fff',
            marginBottom: 28,
          }}>
            SpoolTag
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, background: BORDER, marginBottom: 24 }} />

        <p style={{
          fontSize: 14,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.6,
          marginBottom: 24,
          margin: '0 0 24px',
        }}>
          This tag was created with{' '}
          <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Spool</strong>
          {' '}— the filament management app for 3D printing enthusiasts.
          {spoolId && ' Download the app to view full inventory details for this spool.'}
        </p>

        <a
          href={APP_STORE_URL}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            width: '100%',
            padding: '14px 0',
            borderRadius: 14,
            background: `rgba(${rgb}, 0.85)`,
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            textDecoration: 'none',
            boxShadow: `0 4px 16px rgba(${rgb}, 0.3)`,
            letterSpacing: '-0.01em',
            boxSizing: 'border-box' as const,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download Spool — Free
        </a>
      </div>

      <p style={{
        marginTop: 20,
        fontSize: 12,
        color: 'rgba(255,255,255,0.2)',
      }}>
        lance-studio.com · SpoolTag
      </p>
    </div>
  )
}
