import { useTranslation } from '@/i18n/hook/useTranslation.ts';

const translations = {
  'zh-TW': {
    title: '社群製作爆發成長',
    subtitle: '更好、更便宜、更快速',
    productionCost: '製作成本下降',
    contentAmount: '內容數量提升',
    responseTime: '訊源互動延遲時間',
    percent: '90%',
    times: '10x',
    seconds: '<1s'
  },
  'en-US': {
    title: 'Social Media Production Growth',
    subtitle: 'Better, Cheaper, Faster',
    productionCost: 'Production Cost Reduction',
    contentAmount: 'Content Quantity Increase',
    responseTime: 'Source Interaction Delay',
    percent: '90%',
    times: '10x',
    seconds: '<1s'
  }
};

function StatsSection() {
  const { locale } = useTranslation();
  const t = translations[locale];

  return (
    <div
      className="stats-section"
      style={{
        padding: '40px 0',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'left',
              margin: 0
            }}
          >
            {t.title}
          </h1>
        </div>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#888',
            marginBottom: '40px',
            textAlign: 'left'
          }}
        >
          {t.subtitle}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ flex: 1, textAlign: 'center', padding: '0 15px' }}>
            <div
              style={{
                color: '#666',
                fontSize: '1rem',
                marginBottom: '10px'
              }}
            >
              {t.productionCost}
            </div>
            <div
              style={{
                color: '#F15A22',
                fontSize: '5rem',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
            >
              {t.percent}
            </div>
          </div>

          <div
            style={{
              width: '1px',
              height: '80px',
              backgroundColor: '#ddd'
            }}
          ></div>

          <div style={{ flex: 1, textAlign: 'center', padding: '0 15px' }}>
            <div
              style={{
                color: '#666',
                fontSize: '1rem',
                marginBottom: '10px'
              }}
            >
              {t.contentAmount}
            </div>
            <div
              style={{
                color: '#F15A22',
                fontSize: '5rem',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
            >
              {t.times}
            </div>
          </div>

          <div
            style={{
              width: '1px',
              height: '80px',
              backgroundColor: '#ddd'
            }}
          ></div>

          <div style={{ flex: 1, textAlign: 'center', padding: '0 15px' }}>
            <div
              style={{
                color: '#666',
                fontSize: '1rem',
                marginBottom: '10px'
              }}
            >
              {t.responseTime}
            </div>
            <div
              style={{
                color: '#F15A22',
                fontSize: '5rem',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
            >
              {t.seconds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
