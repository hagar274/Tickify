import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoSharm from '../images/logo.jpg';

const ResultsContainer = styled.div`
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: -5rem !important;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 32px 24px;
`;
const Title = styled.h2`
  color: #00233d;
  margin-bottom: 18px;
  text-align: center;
`;
const SearchSummary = styled.div`
  background: #f5f7fa;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 32px;
  font-size: 1.1rem;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:789px;
`;
const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const ResultCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BookBtn = styled.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #001a33; }
  margin-right: 10px;
`;
const FlightLineContainer = styled.div`
  display: flex;
  align-items: center;
  height: 12px;
  width: 100%;
`;
const FlightDot = styled.div`
  width: 12px;
  height: 12px;
  background: #1976d2;
  border-radius: 50%;
  margin: 0;
`;
const FlightLine = styled.div`
  height: 2px;
  background: #e0e0e0;
  flex: 1;
`;

const sortOptions = [
  { value: 'all', labelAr: 'جميع النتائج', labelEn: 'All Results' },
  { value: 'cheapest', labelAr: 'الأقل سعراً', labelEn: 'Lowest Price' },
  { value: 'expensive', labelAr: 'الأكثر سعراً', labelEn: 'Highest Price' },
  { value: 'early_departure', labelAr: 'رحلة الذهاب: (مبكر)', labelEn: 'Departure (Early)' },
  { value: 'late_departure', labelAr: 'رحلة الذهاب: (متأخر)', labelEn: 'Departure (Late)' },
];

const FlightResults = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  const search = location.state || {};
  const { origin, destination, departureDate, returnDate, cabinClass } = search;

  
  const allResults = [
    { id: 1, airline: 'EgyptAir', price: 919, duration: 120, dep: '06:00', ret: '10:00', seats: 5, airport: 'مطار شرم الشيخ الدولي' },
    { id: 2, airline: 'Qatar Airways', price: 1900, duration: 180, dep: '09:30', ret: '13:00', seats: 5, airport: 'مطار اسكندرية الدولي' },
    { id: 3, airline: 'Turkish Airlines', price: 981, duration: 150, dep: '12:00', ret: '16:00', seats: 5, airport: 'مطار الأقصر الدولي' },
    { id: 4, airline: 'EgyptAir', price: 700, duration: 200, dep: '18:00', ret: '22:00', seats: 3, airport: 'مطار الأقصر الدولي' },
  ];

  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('all');

  const getSortedResults = () => {
    let arr = [...allResults];
    switch (sortBy) {
      case 'cheapest':
        arr.sort((a, b) => a.price - b.price); break;
      case 'expensive':
        arr.sort((a, b) => b.price - a.price); break;
      case 'early_departure':
        arr.sort((a, b) => a.dep.localeCompare(b.dep)); break;
      case 'late_departure':
        arr.sort((a, b) => b.dep.localeCompare(a.dep)); break;
      case 'all':
      default:
        return allResults;
    }
    return arr;
  };
  const results = getSortedResults();

  return (
    <ResultsContainer>
      <Title>{language === 'ar' ? 'نتائج البحث عن الرحلات' : 'Flight Search Results'}</Title>
      <div style={{width:'auto', display:'flex', justifyContent:'flex-end', marginBottom: '8px'}}>
        <div style={{position:'relative', display:'flex', alignItems:'center', gap:8}}>
          <button onClick={()=>setSortOpen(v=>!v)} style={{background:'#fff', border:'1px solid #ccc', borderRadius:8, padding:'7px 18px', fontWeight:'bold', cursor:'pointer', minWidth:120, display:'flex', alignItems:'center', gap:8}}>
            {sortOptions.find(o=>o.value===sortBy)[language==='ar'?'labelAr':'labelEn']}
            <span style={{fontSize:'1.2em'}}>{sortOpen ? '▲' : '▼'}</span>
          </button>
          {sortOpen && (
            <div style={{position:'absolute', top:'110%', left:0, right:0, background:'#fff', border:'1px solid #ccc', borderRadius:8, zIndex:10, boxShadow:'0 2px 8px #eee', minWidth:150}}>
              {sortOptions.map(opt => (
                <div key={opt.value} onClick={()=>{setSortBy(opt.value);setSortOpen(false);}} style={{padding:'10px 16px', cursor:'pointer', fontWeight:sortBy===opt.value?'bold':'normal', background:sortBy===opt.value?'#f5f7fa':'#fff', textAlign:language==='ar'?'right':'left'}}>
                  {language==='ar'?opt.labelAr:opt.labelEn}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <SearchSummary>
        <span style={{marginRight:16}}>
          {language === 'ar'
            ? `من ${origin || '-'} إلى ${destination || '-'} | مغادرة: ${departureDate || '-'} | درجة المقعد: ${cabinClass || '-'}`
            : `From ${origin || '-'} to ${destination || '-'} | Departure: ${departureDate || '-'} | Cabin: ${cabinClass || '-'}`}
        </span>
        <BookBtn onClick={() => navigate('/')}>{language === 'ar' ? 'تعديل البحث' : 'Edit Search'}</BookBtn>
      </SearchSummary>

   
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #eee', padding:'18px 0', marginBottom:32, display:'flex', alignItems:'center', direction:'rtl', gap:0, position:'relative', overflow:'hidden', flexDirection:'row-reverse', textAlign:'right'}}>
       
        
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth:120}}>
          <button style={{background:'#00233d', color:'#fff', border:'none', borderRadius:8, fontSize:'1.1rem', padding:'8px 24px', cursor:'pointer', marginBottom:8, display:'flex', alignItems:'center', gap:6}}>
            <span style={{fontSize:'1.2rem', marginLeft:6}}>&lt;</span>
            حجز
          </button>
          <div style={{fontWeight:'bold', fontSize:'1.3rem', color:'#222'}}>919 ج.م</div>
          <div style={{color:'#1976d2', fontWeight:'bold', fontSize:'1rem', margin: '0 16px'}}>عدد المقاعد المتاحة: 5</div>
        </div>
        
        <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center',gap:12}}>
         
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[0].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[0].ret}</span>
            </div>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[0].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[0].ret}</span>
            </div>
          </div>
        </div>
        
        <div style={{display:'flex', alignItems:'center', minWidth:120, marginLeft:24}}>
          <img src={logoSharm} alt="شعار مطار شرم الشيخ الدولي" style={{width:48, height:48, objectFit:'contain', marginBottom:6, borderRadius:8}} />
          <div style={{fontWeight:'bold', color:'#222', fontSize:'1rem'}}> مطار شرم الشيخ الدولي </div>
        </div>
      </div>

      
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #eee', padding:'18px 0', marginBottom:32, display:'flex', alignItems:'center', direction:'rtl', gap:0, position:'relative', overflow:'hidden', flexDirection:'row-reverse', textAlign:'right'}}>
        
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth:120}}>
          <button style={{background:'#00233d', color:'#fff', border:'none', borderRadius:8, fontSize:'1.1rem', padding:'8px 24px', cursor:'pointer', marginBottom:8, display:'flex', alignItems:'center', gap:6}}>
            <span style={{fontSize:'1.2rem', marginLeft:6}}>&lt;</span>
           حجز
          </button>
          <div style={{fontWeight:'bold', fontSize:'1.3rem', color:'#222'}}>190.91 ج.م</div>
          <div style={{color:'#1976d2', fontWeight:'bold', fontSize:'1rem', margin: '0 16px'}}>عدد المقاعد المتاحة: 5</div>
        </div>
        
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:12, justifyContent:'center'}}>
        
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[1].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[1].ret}</span>
            </div>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[1].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[1].ret}</span>
            </div>
          </div>
        </div>
        
              <div style={{ display: 'flex', alignItems: 'center', minWidth: 120, marginLeft: 24 }}>
                   <img src={logoSharm} alt="شعار مطار شرم الشيخ الدولي" style={{width:48, height:48, objectFit:'contain', marginBottom:6, borderRadius:8}} />
          <div style={{fontWeight:'bold', color:'#222', fontSize:'1rem'}}> مطار اسكندرية الدولي</div>
        </div>
      </div>

      
      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #eee', padding:'18px 0', marginBottom:32, display:'flex', alignItems:'center', direction:'rtl', gap:0, position:'relative', overflow:'hidden', flexDirection:'row-reverse', textAlign:'right'}}>
     
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth:120}}>
          <button style={{background:'#00233d', color:'#fff', border:'none', borderRadius:8, fontSize:'1.1rem', padding:'8px 24px', cursor:'pointer', marginBottom:8, display:'flex', alignItems:'center', gap:6}}>
            <span style={{fontSize:'1.2rem', marginLeft:6}}>&lt;</span>
           حجز
          </button>
          <div style={{fontWeight:'bold', fontSize:'1.3rem', color:'#222'}}>981 ج.م</div>
          <div style={{color:'#1976d2', fontWeight:'bold', fontSize:'1rem', margin: '0 16px'}}>عدد المقاعد المتاحة: 5</div>
        </div>
        
        <div style={{flex:1, display:'flex', flexDirection:'column',  justifyContent:'center',gap:12}}>
          
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[2].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[2].ret}</span>
            </div>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[2].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[2].ret}</span>
            </div>
          </div>
        </div>
       
              <div style={{ display: 'flex', alignItems: 'center', minWidth: 120, marginLeft: 24 }}>
                   <img src={logoSharm} alt="شعار مطار شرم الشيخ الدولي" style={{width:48, height:48, objectFit:'contain', marginBottom:6, borderRadius:8}} />
          <div style={{fontWeight:'bold', color:'#222', fontSize:'1rem'}}> مطار الأقصر الدولي</div>
        </div>
      </div>

      <div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #eee', padding:'18px 0', marginBottom:32, display:'flex', alignItems:'center', direction:'rtl', gap:0, position:'relative', overflow:'hidden', flexDirection:'row-reverse', textAlign:'right'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', minWidth:120}}>
          <button style={{background:'#00233d', color:'#fff', border:'none', borderRadius:8, fontSize:'1.1rem', padding:'8px 24px', cursor:'pointer', marginBottom:8, display:'flex', alignItems:'center', gap:6}}>
            <span style={{fontSize:'1.2rem', marginLeft:6}}>&lt;</span>
            حجز
          </button>
          <div style={{fontWeight:'bold', fontSize:'1.3rem', color:'#222'}}>700 ج.م</div>
          <div style={{color:'#1976d2', fontWeight:'bold', fontSize:'1rem', margin: '0 16px'}}>عدد المقاعد المتاحة: 3</div>
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center',gap:12}}>
          <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[3].dep}</span>
            </div>
            <FlightDot className="start" />
            <FlightLine />
            <FlightDot className="end" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
              <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{allResults[3].ret}</span>
            </div>
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center', minWidth:120, marginLeft:24}}>
          <img src={logoSharm} alt="شعار مطار شرم الشيخ الدولي" style={{width:48, height:48, objectFit:'contain', marginBottom:6, borderRadius:8}} />
          <div style={{fontWeight:'bold', color:'#222', fontSize:'1rem'}}> مطار الأقصر الدولي</div>
        </div>
      </div>

      {results.map((r, idx) => (
        <div key={r.id} style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 8px #eee', padding:'18px 0', marginBottom:32, display:'flex', alignItems:'center', direction:'rtl', gap:0, position:'relative', overflow:'hidden', flexDirection:'row-reverse', textAlign:'right'}}>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth:120}}>
            <button style={{background:'#00233d', color:'#fff', border:'none', borderRadius:8, fontSize:'1.1rem', padding:'8px 24px', cursor:'pointer', marginBottom:8, display:'flex', alignItems:'center', gap:6}}>
              <span style={{fontSize:'1.2rem', marginLeft:6}}>&lt;</span>
              حجز
            </button>
            <div style={{fontWeight:'bold', fontSize:'1.3rem', color:'#222'}}>{r.price} ج.م</div>
            <div style={{color:'#1976d2', fontWeight:'bold', fontSize:'1rem', margin: '0 16px'}}>عدد المقاعد المتاحة: {r.seats}</div>
          </div>
          <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 20}}>
                <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{r.dep}</span>
              </div>
              <FlightDot className="start" />
              <FlightLine />
              <FlightDot className="end" />
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 20}}>
                <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{r.ret}</span>
              </div>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', minWidth:120, marginLeft:24}}>
            <img src={logoSharm} alt="شعار مطار شرم الشيخ الدولي" style={{width:48, height:48, objectFit:'contain', marginBottom:6, borderRadius:8}} />
            <div style={{fontWeight:'bold', color:'#222', fontSize:'1rem'}}> {r.airport} </div>
          </div>
        </div>
      ))}

    </ResultsContainer>
  );
};

export default FlightResults; 