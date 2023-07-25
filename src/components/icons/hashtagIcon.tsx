interface Props extends React.SVGAttributes<SVGSVGElement> {
  fill?: string
  className?: string
}

function HashTagIcon({ fill, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="71.398"
      version="1.1"
      viewBox="0 0 16.933 18.891"
      className={className}
    >
      <g transform="translate(-40.947 -54.404)">
        <path
          fill={fill ?? '#000'}
          strokeWidth="0.037"
          d="M45.874 73.201a2.015 2.015 0 01-.868-.558c-.327-.356-.553-.89-.557-1.313-.001-.162-.006-.163-.352-.067-.722.2-.841.223-1.114.223a2.084 2.084 0 01-1.926-1.345c-.116-.306-.143-.867-.057-1.198.125-.48.428-.91.827-1.174.329-.218.387-.24 1.386-.504a42.507 42.507 0 00.977-.27l.24-.066.01-.895.01-.895-.121.025c-.11.022-.429.107-.766.204-.865.25-1.82-.107-2.297-.856-.21-.33-.29-.594-.312-1.018-.016-.344-.008-.41.085-.696.122-.374.32-.685.582-.916.218-.19.584-.387.855-.458.377-.1 1.368-.37 1.474-.404a6.87 6.87 0 01.305-.081l.193-.047.001-1.606c.002-1.667.01-1.784.166-2.178.164-.413.573-.842 1.006-1.054a2.102 2.102 0 011.36-.144c.7.18 1.3.76 1.495 1.443.023.081.05.626.062 1.267l.02 1.124.093-.012c.05-.006.3-.069.553-.138.253-.07.593-.162.756-.204.36-.096.442-.12.792-.225l.277-.084.02-1.549c.021-1.682.01-1.597.248-2.081.201-.412.724-.83 1.233-.986.272-.084.869-.08 1.135.006.67.217 1.17.712 1.388 1.373.044.133.064.412.081 1.135.023.929.026.959.097.954.041-.003.203-.026.36-.05.935-.15 1.84.397 2.211 1.334.064.162.078.277.079.675 0 .417-.01.508-.086.7a2.059 2.059 0 01-.794 1.003c-.286.192-.315.202-1.511.532a3.97 3.97 0 00-.25.078l-.1.037V64.01l.1-.024c.223-.053.808-.066 1.016-.023.365.076.76.3 1.026.583.282.3.407.522.51.902.23.858-.12 1.741-.885 2.238-.206.134-.377.198-.883.335-.376.1-.545.149-.719.203l-.147.046-.022.972c-.02.943-.024.979-.12 1.228-.217.557-.534.908-1.047 1.16-.29.141-.551.197-.918.194a1.955 1.955 0 01-1.646-.882c-.25-.38-.326-.62-.349-1.108-.01-.228-.031-.423-.046-.432-.015-.01-.108.006-.207.034-.099.029-.412.113-.696.187s-.558.148-.608.164c-.148.046-.33.098-.655.187l-.304.084v.741c0 .778-.022.931-.185 1.307a2.158 2.158 0 01-.988 1.007c-.446.203-1.055.239-1.493.087zm-2.356-2.417A155.211 155.211 0 0045 70.38l.406-.11c.07-.02.344-.095.608-.166.263-.07.537-.145.608-.165.146-.041.617-.17.811-.221.071-.02.27-.076.443-.127.172-.05.42-.117.553-.15.131-.031.364-.092.516-.134a235.31 235.31 0 011.603-.437c.244-.065.455-.138.47-.161.031-.05.039-2.793.008-2.874-.022-.056-.01-.058-.736.14l-.626.168c-.387.104-.64.173-1.07.293l-.387.105-.493.132-1.018.278c-.342.096-.953.263-1.42.387-.574.154-.967.26-1.16.316l-.88.24c-.414.112-.829.244-.923.293-.768.4-.996 1.444-.464 2.127.385.494.964.657 1.668.47zm12.373-3.379c.602-.163.765-.244 1.01-.503.322-.341.466-.799.381-1.21-.115-.559-.484-.964-1.016-1.12-.254-.073-.628-.058-.933.037l-.194.06v2.918l.135-.026c.074-.013.352-.084.617-.156zm-6.722-1.76c.334-.092.656-.18.717-.2.06-.018.251-.07.424-.115.172-.045.404-.11.516-.143l.203-.06.01-.864c.005-.475-.003-.876-.019-.892-.015-.015-.144.005-.286.045-.346.097-.752.208-1.088.297l-.387.104c-.06.018-.21.058-.332.09-.43.114-.387.003-.387 1.016 0 .487.005.886.012.886.006 0 .284-.074.617-.165zm-5.716-.886c.192-.05.49-.13.663-.177l.314-.087.01-1.481c.004-.815.001-1.482-.008-1.482a13.9 13.9 0 00-.703.187c-.84.23-.968.265-1.08.292-.383.095-.792.43-.96.787-.382.814.088 1.781.97 1.999.277.068.409.062.794-.038zm5.39-1.473l.453-.124c.142-.04.457-.124.7-.19.244-.064.559-.15.7-.19a88.542 88.542 0 011.2-.328l.607-.165c.264-.07.53-.143.59-.162a164.926 164.926 0 002.046-.559l.682-.186c.304-.083.635-.195.735-.249.356-.193.61-.537.723-.975.117-.453-.102-1.048-.505-1.376-.409-.332-.883-.4-1.506-.217a14.974 14.974 0 01-.719.197l-.35.096-.682.188c-.253.07-.593.162-.756.204-.162.043-.336.09-.387.107-.116.036-.27.079-.866.24-.264.07-.537.145-.608.165-.308.087-.95.263-1.549.423-.355.096-.682.188-.728.207l-.083.033v1.457c0 1.249.008 1.457.054 1.457.03 0 .141-.024.249-.053z"
        ></path>
      </g>
    </svg>
  )
}

export default HashTagIcon