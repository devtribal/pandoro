# pandoro (hwafy) 🍅
 
a pomodoro timer with a built-in manhwa reader inspired by [otakufy.live](https://otakufy.live/).
 
[live demo](#)
![preview](https://i.pinimg.com/1200x/c8/a2/c5/c8a2c548db07482dfad45eaecb0556ed.jpg)
 
## what it does
 
finish a focus session, earn some chapters. read them in the built-in reader, then it locks and sends you back to the timer. that's the loop.
 
- pomodoro timer (focus / break)
- stopwatch mode
- timer that doesn't drift when the tab is in the background
- built-in manhwa reader as the reward
- reader locks after your chapters are used up

## stack
 
- next.js (app router)
- plain javascript
- css modules

## running locally
 
```bash
git clone https://github.com/devtribal/pandoro.git
cd pandoro
npm install
npm run dev
```
 
## roadmap
 
- [x] basic timer
- [ ] timer refactor (`totalSeconds` + `Date.now()`, fixes the lag)
- [ ] stopwatch mode
- [ ] pomodoro mode (focus / break)
- [ ] basic ui + mode switcher
- [ ] break screen
- [ ] manhwa api / scraper spike
- [ ] reader with mock data
- [ ] reader ui
- [ ] real data in the reader

## status
 
work in progress