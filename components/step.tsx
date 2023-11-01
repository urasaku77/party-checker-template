import * as React from 'react'
import { Menu } from './menu/menu'
import { makeStyles, createStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Box, Grid, MobileStepper, Paper, Typography, Button } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const steps = [
  {
    label: 'ルールをよく読む',
    description: `まずはルールと禁止・制限事項をしっかり確認してください。わからない点があれば主催者に確認してください。`,
  },
  {
    label: 'パーティを決める',
    description:
      '決められたルール内でベストなパーティを考えましょう！ガッツリ勝ちに行くのも良し、自分の好きなポケモンでパーティを組むのも良し、楽しみ方は人それぞれです(^^)',
  },
  {
    label: 'パーティを入力する',
    description: `入力欄に考えた6匹のポケモンを入力してください。テキストボックスをクリック（タップ）すると文字が入力してポケモンを検索することができます。禁止されているポケモンを選択するとエラーが出て進むことができないのでやり直してください。制限されているポケモンを選択すると色が変わりますが続行可能です。パーティのデータは保存されませんので安心して下さい。`,
  },
  {
    label: '「チェック」ボタンを押す',
    description: `6匹入力できたらルールに収まっているか確認し、参加するTN（トレーナーネーム）を記入して「チェック」ボタンを押してください。ボタンが押せない場合は、6匹入力できていないか、禁止ポケモンが含まれていますので、再度パーティをご確認ください。`,
  },
  {
    label: '結果を確認する',
    description: `パーティに問題がなければあいことばが表示されますので、その画面のスクリーンショットを主催者送り、大会IDを教えてもらってください。NGが出た場合は制限に引っかかっていますので、パーティを見直して再度チェックしてください。`,
  },
  {
    label: '当日大会に参加する',
    description: `時間に送れないようにエントリーして大会に参加しましょう。9世代の仲間大会のシステム上、同じタイミングで潜ると再戦が起きやすいため、対戦に敗北したプレイヤーは、対戦を終了してから次の対戦を開始するまでに20〜40秒ほど時間を空けていただきますようお願いします。`,
  },
]

const styles = makeStyles((theme) =>
  createStyles({
    root: {},

    stepper: {
      backgroundColor: '#ffe4b5',
    },
  })
)

export function Step() {
  const theme = useTheme()
  const classes = styles()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
      <Grid item xs={12}>
        <Box pt={3} p={3}>
          <Menu title="使い方" image="/nc139230.png" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ maxWidth: 400, flexGrow: 1, alignItems: 'center' }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              height: 50,
              pl: 2,
              bgcolor: '#ffe4b5',
            }}
          >
            <Typography>
              <strong>{steps[activeStep].label}</strong>
            </Typography>
          </Paper>
          <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>{steps[activeStep].description}</Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.stepper}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                次へ
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                戻る
              </Button>
            }
          />
        </Box>
      </Grid>
    </Grid>
  )
}
