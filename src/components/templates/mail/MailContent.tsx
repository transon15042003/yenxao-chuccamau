import { rootStyle, LOGO_IMAGE_URL } from './InitSetup';

type MailContentProps = {
  children: React.ReactNode;
  headerColor?: string;
  headerHeight?: number;
  width?: string | number;
  title: string;
  messages: string[];
  infoItems: {
    labels: string[];
    values: React.ReactNode[];
  };
  highlightText: string;
};

export const MailContent = ({
  children,
  headerColor = '#B4071A',
  headerHeight = 150,
  width = '100%',
  title,
  messages,
  infoItems,
  highlightText
}: MailContentProps) => {
  return (
    <table
      width={width}
      cellPadding={0}
      cellSpacing={0}
      style={{
        background: rootStyle.background,
        borderRadius: 10,
        margin: '0 auto',
        borderCollapse: 'separate',
        borderSpacing: 0,
        overflow: 'hidden',
        border: '1px solid #e0e0e0'
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              background: headerColor,
              height: headerHeight
            }}
          >
            <img
              src={LOGO_IMAGE_URL}
              alt="logo"
              width={150}
              height={125}
              style={{
                display: 'block',
                margin: '0 auto',
                background: 'transparent'
              }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ background: '#fff', color: '#212121', padding: '10px 12px' }}>
            <span style={{ fontWeight: 600, fontSize: 20, display: 'block', marginBottom: 8 }}>
              {title}
            </span>
            {messages.map((message, index) => (
              <span
                key={index}
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: 12
                }}
              >
                {message}
              </span>
            ))}
            <table
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              style={{
                fontSize: 16,
                color: '#000000',
                marginTop: 18,
                tableLayout: 'fixed'
              }}
            >
              <tbody>
                {infoItems.labels.map((label, index) => (
                  <tr key={index}>
                    {/* Cột trái: label */}
                    <td
                      width="50%"
                      style={{
                        verticalAlign: 'top',
                        padding: '0 8px 0 0',
                        minWidth: '120px'
                      }}
                    >
                      <div
                        style={{
                          listStyle: 'disc inside',
                          margin: 0,
                          padding: 0,
                          wordBreak: 'break-word',
                          marginBottom: index === infoItems.labels.length - 1 ? 0 : 12
                        }}
                      >
                        {label}
                      </div>
                    </td>
                    {/* Cột phải: value */}
                    <td
                      width="50%"
                      style={{
                        fontWeight: 600,
                        verticalAlign: 'top',
                        padding: '0 0 0 8px',
                        wordBreak: 'break-word'
                      }}
                    >
                      <div
                        style={{
                          marginBottom: index === infoItems.values.length - 1 ? 0 : 12
                        }}
                      >
                        {infoItems.values[index]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span
              style={{
                display: 'block',
                background: '#F5F5F5',
                color: '#920202CC',
                borderRadius: 10,
                padding: '10px 20px',
                marginTop: 24,
                fontSize: 16,
                fontWeight: 600
              }}
            >
              {highlightText}
            </span>
          </td>
        </tr>
        {children}
      </tbody>
    </table>
  );
};
