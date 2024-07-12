import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BUTTON_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { IconComponent } from '../components/IconComponent';
import { BodyComponent } from '../components/BodyComponent';
import { IconComponentSmall } from '../components/IconComponentSmall';
import { styles } from '../theme/appTheme';

export default function PerfilScreen({ navigation }: any) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hola, administra tu cuenta</Text>
          <IconComponent pathImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsU9PD6epuU1Eolx_ElhxRlZwjYKUiJNDzw&usqp=CAU'/>
        </View>
        <BodyComponent>
          <View style={stylesI.containerM}>
            <Text style={stylesI.text}>Cuenta</Text>
            <IconComponentSmall title='Historial de compras' 
              pathImage='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMNEA4PDQ0SDhANDxASEA8PExcVDw8XFxcXGBURFRMYHSggGBolGxcVIT0iJSkrLjEwGB8zODMsNzQtLisBCgoKDg0OGxAQGy0lICUtLS0wLS0rKy8rLS0tLS0tLTUvLi8tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwIHBAUGCAH/xABGEAABAwIBCAYGBwYFBQEAAAABAAIDBBEFBhIhMUFRYXEHEyIygZFCUnKhscEUI2KCkqLRJDNTk+HwNENj0tMXdLKzwhX/xAAaAQABBQEAAAAAAAAAAAAAAAAAAQIDBAUG/8QANxEAAgECAwUGBAYBBQEAAAAAAAECAxEEITEFEkFRoRMyYXGx8IGR0eEUIiNSwfFCM0NikqIV/9oADAMBAAIRAxEAPwC8UIQgAQhCABCEIAEIQgAQlyODQXOIaALkk2A4krmcVy5pKe7WPNQ4bItLfxnQfC6dCEpu0VcjqVYU1ebS8zqkKrK7pEqJLiCJkA2OtnuHidHuWiqcfqpv3lVIeAcWt/C2wVuGBqPVpdfQzqm2KEe6m+nrn0Lsklazvva32iB8ViuxSAd6phHORo+ao69zc6Sdp1qQKnWzlxl0+5Slt2XCn/6+xeAxWnOqqh8JG/qsiKdj+49rvZIPwVEhTah7Njwl0+41belxpr/t9i+EKmKXGZ4v3dRIzhnHN8joW8oct6hlhKGzjaS3NPgW6PiopbPqLutPp6lqntzDydppx6rpn0LLQuYw7LSnlsJA6Fx2O7TfMfMBdDFM2RodG9r2nU4EEHxCpzpTpu0lY1KOIpVlenJP3xWqHIQhMJgQhCABCEIAEIQgAQhCABCEIAEIQgAQhYOK4nFRxOmqHhjG+bjsa0bTwSpXyQjaSuzNvbWuLyi6QYabOjpQKmUaCQfqmH2vS8NHFcTlTlrNXkxsvBTfwwe1IN7yNfsjRz1rmAVoUcEtany+pjYrab7tH5/T6m5xfH6iuN55nOF7iMaGN5MGjxOniteCkgqQK0YpRVkYlSTm96TuxoKmClgr6ClImhwKmCkgqYKUjaGgqQKWCpApRjQ4FfQUoFMBThjQwFZtBiMtM68EpjO23dPMHQfFa8FMBQ0mrMam4u8XZ80WDguWbJLMqgI3as9tyw8xrHvHJdbG8OAc0hwIuCDcHiCqTBW5wPKCSjPZ7bL6YyezzvsKzq+ATzp5Plw99PI3cFtyUfy4jNfu4/Fcfhn5lroWuwrFY6tmfC7V3mnvNO4j5rYrKacXZ6nTwnGcVKLunxBCEJBwIQhAAhCEACEIQAIQsDGcTjoYZKid2ayMfecdjWjaSUJXyQjaSuxGUWORYdCZpzwjjHfkd6rf12Kj8fx6bEJTLO7QLiOMdyIbmj4nWUvKLHZcRndPMbDVHGD2Ym7GjjvO0rWgrWw9BU1d6mBjMU6z3V3fUaCpApQKmCrRntDQVMFJBUwUoxoaCmApIKkCnEbQ0FTBSwV9BQMaHAqYKSCpgpSNoaCpApYKkClGNDgV9BSgUwFOGNDAUwFIBUwUDGjPw+ufTSCWF1nN8iNrSNoVmYDjbK1lx2Xttns3cRvCqcFZdBWvp5GyxOzXNPgd7SNoKr4nDRrLk+DL+z9oSwkrPOD1X8rx9dC5ULW4NijKyMSM0HU5u1p3cuK2SwZRcXZ6nbQnGcVKLunowQhCQcCEIQAIQhAESdp0WVFdIWVP/wClUZkTv2WBxEVtUjtRmPPUOHMruOlnKP6LTikidaarBziNbItTj97u8s5UuCr+Epf5v4GZj63+2viOBUgUsFSBWgZLQ0FSBSgVMFBG0NBUgUsFSBSjGhoKmCsvBcImrpOqpoy86M52pjB6znbB7911Z+AdHsFOA+qP0qTcdETeTfS8dHBRVcRCl3teRNQwdSv3dOb0Kzw/DZqk2p4Hy7yxpLRzdqHiuko+j6rksZBHDwkdnO8mgj3q2YomsAaxoY0aA1oAaOQCYqU8dN91Jdft0NWnsiku+2+i+vUrSPo0l9KrjHJjj8wvsnRtMO5Vsd7Qc34XVlIUf4ytz6Iley8L+3q/qVJWZDVcWlrBMB6jh8DpWhqaZ8Ls2aN0bvVLS0+RV8rHqaVkzSyaNsjT6LgCPepYY+a7yv0KtbYtKX+nJrqvr1ZRQKkCrAxvIFrgX0Tsx2vqnm7Twa86R438FwdVTPge6OZjmObra4WP9RxWjRrwqL8vy4mFicFVw7/Osua09+YAr6ClApgKnKTQwFTBSQVMFAxo3WT2LmjmEguWO7L2j0hv+atSGYSNa9hDmuF2kaiDqKpUFdzkBi986kee7cw32jWQs/H0Lx7RarXy+3p5G7sTGuE/w8tHp4Pl8fXzO2QhCyDqgQhCABLlkDGuc4hrWglxOoAaSSmLielnF/ouHPjabPrHCEb806ZDyzRm/eToxcmkhs5KMXJ8CoMqMZOI1c9SSc17rRg+hG3QxttmjTzJWsBSgV9BWykkrIwJNt3Y0FMBSgV9BTiJocCpApYKkCnDGhoK6TI/JeTFJNF44IyOslt+Rm93w1nYDrcmcFfiNSynj0X7Uj9kbBbOf7wOZCv3C8PjpYmQQMzI4wQBtO9xO0k6bqricR2a3Y6+hbweE7V70u6uvvifMLw2KjjbDTxiNjd2tx2ucdZPErOQsHFMTipIzLUSCNg363H1WjWTwCy82+bN3KK5JGcsepq2QjOlkZG3e9waPMqqsf6Rp5yWUY+jR+ubGVw56m+GniuPqKh0ri+V7pHHW97i5x5k6Vcp4KTzk7GZW2pCOVNX6L6l5SZV0bTY1kZ9k5w8wpwZS0khs2riv9o5v/lZUQCpAqf8BDm+hU/+xU/aup6Jika8BzHBzTqLSCD4hMXn6gr5ad2fBK+N29jiL8xtHNd1k/0h6Qyvbw69g97mjXzHkoKmCnHOOfqW6G1aU8prdfT55W+KLHWpx7A465mbKLOaDmSDvMPzHBbCnnbK1r43B7Hi7XNN2kbwU5U4ycXdamlKEZx3ZK6ZSOL4XJRymKUaRpa4d1w2OaVhAq5MoMFZXRGN3ZeLmN+1rv0O0Kn6qndC98Ujc1zHFrgdhC28NiO1jnqjkNo4F4aeXden0fvP5gCvoKUCmAq2ZjQwFZVFVuhkZKw2dGQR4bDw2LCBUwUeAzNO6Lqo6ps0bJG914BHC+xZK4/o8r8+J9OTpgddvI6x53PiuwXOVqfZzcfduHQ7/CV+3oxqc110fUEIQoywCo7ppxPra6OnB7NLCLjc+TtO/KI1eK8w5YV30nEK6W9w6pkDfZYcxvuaFawi/Pfkiri3aFuZrAUwFKBX0FaJlNDQUwFKBX0FKRtDQVMFLBW8yLwv6dXU0DhdhfnybsxgznA87Zv3kOSirsRQcmki3ejbAfoNG2R7bT1YbJJfW1v+XH4A3tvcV16ELFnJyk5M6GEFCKiuBrccxaOggfUTmzWDQ0d57j3WN4n+qovKDHZcQmM07tAuI4x3Im+q35natv0l5QGtqnQsd9RSEsaBqe/U9/HT2Ry4rkgVp4WjuR3nq+hi4/EOpLcXdXVjQVIFKBUwVbMxoaCpgpIKmClGNDQUwFJBUgU4jaOnyRynfQSBriXwPP1kfq/6jNx4bfIq4IJmyta+Nwcx7Q5rhqIOohefAVYnRhjZ7VHI7QAXQX2bXM/+vxKhjKCa7Ra8TX2XjHGSoy0eng+XkyxVwXSTg92tq4xpZ2ZrbQdDXnkdHiNy71Y1dStnjkif3ZWOaeFxrVCjUdOal7sbGKw6r0nTfHTz4dSiwVIFFREYnvjfocx7mu5tNj8FEFdAmcPKLWTHAr6ClApgKcRtHRZE1nU1kQvZsudG7xHZ94CtVUdTzmN7Ht1sLbcwbhXdG8Oa1w1OAI8Vk7RhacZc/wCDptg1b0p0+Tv8/wCiaEIWcbwmpl6tkjz6DHO8hdeTQ8u0uNydJO8nWV6iyrkzKCveNbKKpcPCNxXlppV3CaP4FLGcEOBUwUkFTBV0oNG1wHCnV87KeKSKOSS+Z1zi1ryPQBAPaPyXXjomr/4lN/Nf/wAar5jy0gtJBBBBBsQRqIOwq+ejXLMYlF1FQ4Crgb2tnXtGjrRx3jx26IK86kFvR0J8PTpze7LU4kdFFd/Ep/5j/wDjXW9HWRM2GTzT1RicXRCOPqnOda7gX3u0W7rferCQqcsRUkt1l2GFpwkpLVeILExESGGUU+b1xjeIi82aH2OaSbHReyy0KAsFL/8AS2t9en/mP/2KQ6Lq316f+Y//AGK5lzGW+VLcMg7NnVEoIijOzfI77I950byLccTWk7LXyKE8Fh4R3pXsvFlP5QYG/DpBDPJG+Qtzi2FxdmA6s67RYnXb+i1gKJ6h0z3ySvL3yOLnudrcTrJUQVpxvbPNmHU3XJ7qshoKkClAqYKcRNDQVMFJBUwUoxoaCs7Ca0008M7dcT2usNoB0t8RceK14KldLa+TGXcc1qj0UxwcAQbggEHeCprV5NS59HSuOswR38GgfJbRc81Z2O1TurlQZe0vU10xAsJQx48RY/mDlz4K7HpUZaogdtdCR5F36riwVu4eV6UX4HG7Qhu4maXO/wA8xoKkClgqQKnKLQ0FXPgEmfS0zjr6lgPMAA/BUqCrdyJfnUFKTukHlI4fJUdor9NPx/hmzsKVq0484+jX1N8hCFkHUGnyvZnYdiLRrdQ1QHjE5eWWletq6HrYpY/4kb2fiBHzXkZh0C+g20jcruE0ZTxSvYcCpgpIKmCrhSaHArKw6ukppY54HmOWJwcxw2EfEHVbaCQsIFTBSjD0lkVlTHi1OJG2ZNHZs8N9LHbxvadJB5jWCujXmDJnHZcMqGVEB0t0PYe7Kw62O/XYQCvReBYzFX08dTA67JNYPejcO8xw2Ef11LMr0ezd1oalCt2is9UbRCFhYpiEdJFJPO8MjibnOcfcANpJsANpKgLBiZS47Fh1O+omN7aI4we1K/YwfrsFyqCxjFpK6eSoqHZz5Dq9Fg2MaNjR/elZOV2UsmK1BmfdkbLtgivojbx+0dBJ5bAFpAVq4ej2au9WYuLxHauy0XUcCpApYKkCrRQaGgqQKUCpgoI2hoKkClAqYKUY0NBUrpQKy6CmdUSxQs70r2sbwLja6W9tRm63ki9Ml48yipAf4EZ82g/NbZLhiEbWsaLNY0NA3ACwTFz7d22dlFWVisOlZ/7RTt2iEnzcf0XEgro+kWq6yvkaNULWM92cfe4rmQVuYZWpR8jkce1LETa5+mQ4FTBSQVMFTlBoaCreyGFsPpb7pD5yPKp4FXZk1HmUdKP9Fjvxdr5qjtB/ppeP8M2Nhw/WlL/jb5tfQ2iEIWSdMC8pZV0f0avroSLdXVTBvslxLPykL1avPnTdhnUYn1wFm1sDH33vZ9W8eQjP3lZwsrSsQV1eJwQKkClgqQKvlBoaCpgpIKmClGNDgV1GQeVz8JqLm76eYgTxDdskaPWHvGjcRygKmCiUVJWYkZOLuj1XDWxyRNnZI10LmdYJb9jNtfOvsFlRnSFlkcTl6qEkUsDj1Y1dc7V1rh8BsHE6OehyiqGUj6BsxFPI8PLNvFgOxpNiRvHE31gKgo4dQd3nyJq+Jc4qK+I0FMBSgV9BVooNDQUwFKBX0FKMaHAqQKWCpApwxoaCpgpIKmCgjaGgqwuirBDJK6tkb2ILsiv6TyO04cmm3N3Bcrkrk9LiUwjYC2NtjLLbsxt+bjsHyurzw6iZTRRwwtzY4m5rR8ydpJ034qpi66jHcWr9DQ2fhXKXaS0Wni/t6mYkVNQ2Jj5HmzI2Oe47gBclPXB9KON9VC2kjd26izpLa2sB0D7zh5NKzqdN1JKKNivVVKm5vh7XUrauqzPLLM7vSue88M4k2SwUkFSBW+ssjjpXbuxoKmClgr6ClI2jJiYXua1ut5DQOJNgr6giEbGMGpjQ0eAsqdyIozPXQC12xuMjuAbpHvzR4q51mbQneUY8v5/o6DYtK0Jz5tL5f2CEIWebQKuOnDBfpOHtqWNu+gkDzbX1b7NkHK+Y77qsdY9bSsnjkhlbnRzMdG9p1Oa4EOHkSnQluyTEaurHkIFTBWZlDhL8Pq6ikl0up5C0OPpt1sf4tLT4rABWqnfMz5RsNBUgUsFSBSkTQ0FTBSQVMFKMaHAqYKSCpgpRjQwFMBSgV9BSjGhoKYClAr6ClI2hoKYCm4RAJqimiffNlnhY62g2c8A2O+xV20/Rph7DcwyScHyut+UhR1K8aepLSws6qbjbIpGNpcQ1oLnONg0C5J3AbV3OTPRzUVJbJWXpoteaf3z+Aae5zdp4FWrhuDU9J/hqaOHRYuY0B55u1nxK2KqVMbJq0VYu0tnRTvN38OH19DBwvDYqSJsNPGI427BrJ2ucdZPErOQtfjGLQ0MRmqXhjRoHrPOxrRtKp5t+JoZRXJEcdxaOggfPMdDdDWjvSOOpjeJ/UqicVxJ9ZNJPKbvldc7mjY0cALDwWVlRlJJiU2e7sRsuI4gbhg3ne47StMCtbDUOzV3q/djnsdiu2lux7q6+P0GgqYKSCpgq0ZzQ0FMBSQU+midK9kbBnPkc1rRvLjYDzKUY4t6FkdFeH2ZNUuH7wiNh4DS+3C+aPuqwFg4NQNpIIYGaomAE+sdbneJJPis5YVap2k3I67C0expRhy18+PUEIQoiwCEIQBUvTpkv10TMShbd9MBHUADS6InsyfdcT4OJ2KkQV7DmibI1zHtDmPaWua4XDgRYgjcQvMXSFkm7B6t0QBNNNnPpZDpuy+mMn1m3A4ix2q7hql1uMr1of5I5wFTBSQVMFWiq0NBUgUsFSBSkbQ0FTBSQVMFKMaHAqYKSCpgpRjQwFMBSgV9BSjGjbZNn9sov+6p//Y1em15bwqqEE9PM4EthnikIGshjg4gcdCtiTpgh/wAuhmd7b2N+F1TxNKU2t1cC7hKsIRe87ZlmKLnAAkmwGkk6gqdr+lupfop6WGHi8ukcOXdHuK5HF8o6qu/xVU+Rv8O+bH+Bth7lFHCTeuRLPHU493MtrKTpHp6UOZSkVcursH6lvEyDvcm35hVTjGNTV8nW1Uhe7SGjUyMeqxuwf2brVAqQKvUqEKemvMy6+JnWylpyGgqYKSCpgqcptDQVIFKBUwUoxoaCrC6LcC6x7q2RvZiuyK/pPI7b+QBtzJ3LjMn8JfX1DIItGdpe/ZGwd55/vWQFfGH0bKaKOGIZrIm5rR8zxOvxVTGVt2O4tX6Ghs3C78+0lotPP7a/Iy0IQso6AEIQgAQhCABaLK/JuLFqV9NOLE9qKQC7oXgdl487EbQSFvUJU7ZoDyJjmETYdUSUtUzMliOm3dePRkYdrTv+BuFhAr07l5kZDjUGa60VRECYKgDSw+o71mHaPELzdjWEzYfO+mq4jFLHrB7rhsex3pNO/wCd1oUqqmvEqVKe75GMCpgpIKmCpiBoaCpApYKkClI2hoKmCkgqYKUY0OBUwUkFTBSjGhgKYClAr6ClGNDQUwFKBX0FKRtDQUwFKBX0FKMaHAqQKWCpApwxoaCsijgfM9kcbC98jg1jW63EpVJA+d7IoWGR8hs1jRcuKuvIbI9uHM62az6qQdpw0tiB9BnzO1Q1q6pK/HgS4fCyrS8OL98TLyOycbhkAabOnlsZpBtOxjfsjT7yujQhZEpOTuzooQjCKjHRAhCE0cCEIQAIQhAAhCEAC57K7JSnxeHqqplnMv1U7LCWEna07QbC7ToNuS6FCVNrNAeWMsMjKnBpM2oZnwuNoqmMHqpNwPqP+yeNr61zwK9g1dKydj4po2yxyDNfG8BzHDcQdBVRZYdDdy6bCH5t7k0kzuzyilOrk6/Malcp4hPKRXnR4xKeBUwU3EsOmo5DDVQPgkb6ErS0niNjhxFwscFWkyq0NBUgUsFSBSkbQ0FTBSQVMFKMaHAqYKSCpgpRjQwFMBSgV9BSjGhoKYClAp9LA+ZzY4o3Svd3WRtLnnk0aSlGWPgK22AYHPiMnVUseda2e86I4xve7Zy1nYF2WS/RbI/NkxJ3Us0HqIyDK7g540NHAXPJWnh+HxUsbYqeJsUbdTWCw5neeJ0qrVxUY5RzfQt0cDKWc8l1+xpskskYcMZdv1s7x9ZM4aT9lg9FvDbtXSoQs6UnJ3ZqxjGK3YqyBCEJBwIQhAAhCEACEIQAIQhAAhCEACEIQBg4rhUFbGYqqCOeM+jI0OAO8bjxCrfHuhanku7D6l9KdkUt5YuQcTnjxLlayE6M5R0Y1xT1PNWL9GeJ0lz9E+ksHp0rhJ+TQ/8AKuXqad8BzZ4nwu9WVpY7ycAvXqVNC2QZsjGvB2OAI8irEcU1qvfUieHi9GeRAVIFeoKjI7D5SS/DKUk63CFjXHmWgFa6To1wt2k0AHsyzNHk14UixceTIXhZcGecwVIFeio+jTC26RQD700zh5F62FPkZh8ds3DabRqz4mvP5rpfxceCYn4SXNHmyCN0hzY2ue46msBc4+AXS4VkHiFVbMonxNPp1FogOOa7tHwBXoenpmRDNijZGNzGho8gnJksY+C99BVg48WVVgnRA1tnV9UX6rxU4zW8jI7SRyAVh4PgdPQNzKSnZCDrLRd7vaee07xK2SFWnVnPvMswpQh3UCEITCQEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgD/9k=' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
          </View>
          <View style={stylesI.containerM}>
            <Text style={stylesI.text}>Datos</Text>
            <IconComponentSmall title='Soporte' 
              pathImage='https://cdn.icon-icons.com/icons2/534/PNG/96/technical-support-2_icon-icons.com_52811.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Legales' 
              pathImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZ-Qb7tDtn8ar_p_M1hVC1Owr2rJLSNvn1w&usqp=CAU' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
          </View>
          <View style={stylesI.containerM}>
            <Text style={stylesI.text}>Contacto</Text>
            <IconComponentSmall title='Facebook' 
              pathImage='https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Instagram' 
              pathImage='https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580635-yumminkysocialmedia26_83102.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Twitter' 
              pathImage='https://cdn.icon-icons.com/icons2/306/PNG/96/Twitter-Icon_34073.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='TikTok' 
              pathImage='https://cdn.icon-icons.com/icons2/2972/PNG/96/tiktok_logo_icon_186896.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Whatsapp' 
              pathImage='https://cdn.icon-icons.com/icons2/2972/PNG/512/whatsapp_logo_icon_186881.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Telegram' 
              pathImage='https://cdn.icon-icons.com/icons2/2699/PNG/96/telegram_logo_icon_168692.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
              <IconComponentSmall title='Email' 
              pathImage='https://cdn.icon-icons.com/icons2/1826/PNG/96/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png' 
              pathImageS='https://cdn.icon-icons.com/icons2/1527/PNG/96/angleright_106681.png'/>
          </View>
        </BodyComponent>
      </View>
    </ScrollView>
  )
}

const stylesI = StyleSheet.create({
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:20,
  },
  containerM: {
    backgroundColor:BUTTON_COLOR,
    marginTop:20,
    paddingTop:15,
    paddingLeft:20,
    borderRadius:25,
  },
  text:{
    color: TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  }
});