import React from "react";

export default function ProjectsImg(props) {
  // You can still keep the theme if needed
  const theme = props.theme;
  return (
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUQEhIWFhUXGBgYFRgVFRgZGBgYFhgXGBcVGRYYHiggGBolGxoXIzEhJSktLi4vFx8zODMuNygtLisBCgoKDg0OGxAQGy0mICUwNSstLS0wKy4rLS0tLS0tLS4tLS01LS0tLy4tLy0tLS0uLS0vLS0tLS0tLS0tLy0tLf/AABEIANYA6wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABMEAABAwEEBAcKCwcEAgMAAAABAAIDEQQSITEFBkFREyJhcYGRoQcVMjM0UnKSsdFCU2Jzk7KzwdLh8BQjY3SCosIWJDVUQ4NEo/H/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwEEAgX/xAAxEQACAgEBBQYEBgMAAAAAAAAAAQIDESEEEjEyURMiM0FxgQVCUmEWI5Gh0fAUscH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiKI05pkQAgeF7OQDf7M9wONpLLNjFyeESVotLIxee4NHKadW9Q0+t1mbgC93osP+VFS7db3ykue7t9p2rTpXaacmHb7lzu9+R1x2ZfMzodk1rsshu8JccdkjSz+48XtU01wOINeZcXkgvHAmlQMyamuNK7gtnR9omsrw6CQgH4J8Fx81zcjXfnzJG9+aEtlXys7AijNX9MNtcQkaLrhhIza120co3H8wpNdCedUcjTTwwiItMCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAwW2fg2Ofuy5zgOiq5zpG1VvTvNW1IYD8I7T14nlICtmt9ooxsQOLz1VwqeShd1LnulbQZJWMY0lrSGtbvzujnOfSVy3S1wdmzQ0yfQfhyHE5DdXIU2lZhE51SRcYPDc40PNQfCO6o5cFut0e5kgYSL5pV/ByOa0uyZebQM665VIqApN+r4cOM8ucPBqAGM9GIYV56qGTq0K603wRG2l4hsXtc/0QKY7b2Czyw8W8BhWjhta4bD9xU5Z7OLO7iQySZX5Ktr0NJq+mZAHNU1Cw6fs3B1tDBUGglaMnNOAPpDCh/JMjQ0dXdJfs1pY+v7uWjJN2PgP6Cc9xcunrjdwPD2Zg0cDyO/OvWui6m6Y/aIbrz+9io2TefNf0jtBXTTL5Tk2mHzIn0RF0HIEREAREQBERAEREAREQBERAEREAREQBERAF8c4AVOAGdV9Wnpm08FBJIMww056UHajNSyULWLSwnmLmniNq1p3gA3jzHFNW9GC8yVwxu8J0yF7W9FwHpKg7TJxWO89snWCfct7uaaZdLG+CV957LpYTnwZaKCu26aivMuBvOWfSS3UookrfrMILTFBKWsa9kjqkOcXvZI2NsTCCACQS6pByoVZAoK0aAjtErJZWmsTi5ldhJBwpy44qXjLgSCOQUypvrvSUk0sIlXXOMpbz9CtaX1mbBbY7NKS1j46tux3jJK57Whl+lWUaXZUFQK50Nh4Iyw3XkVc0gkDCp2haWkdBwzSMnLayR+CQcQc8Nla44g0W3FIIYnPkoxrASSScGgcq2Uk0kkKq5xcnJ6N6FOZAWWi5SgdFeaN14Vu9Dwexb9g0h+z2iO0jAE3JhsuuIq7owdzgjJQmrmlZLXaXTS0o0uDQBS6xovBp3nE1O+qWiQFjgci1/wDbiP1yLMtMrhSWDtSLBYSTGwu8K42vPQVWdd58wIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALU0tZeGhkiGbmOA5yMD10W2iBPBxJxJj4JwpJE91Ac9z2c4I7TuUNoOxzG1xx2d1yUuutccg048YfCbdGI+Tgu1ac1WgtRvuBZJ57KAndeFKOyGePKucaTMdgtTXQP4WWIu4zm0aCWlpaQDV+Z2jFcco9nrLgfTojLaXu1rvf3zOivsUrBRwDxTFzBTrYTUdBKpdqjtrHOiitl2MGjL0bL7R5rnObeJGVcTgq/pHW23SOFbQ4N81lGC8KOaKtANMDmVeLLrJZJGcKZWN2uD3AOacyHV2qXaRfJod0tlu2bHaJSz9s/7RvaGsTmRMjYHvoKl5BAc5xLnPLnZ1cSduawa56tumsj3cKWujBkuinBuuCtHVxJwNDUCtDRUfTmtM77S11mnkZGwUbRxuna5104EHACo2Ehb1j19tjRRz434ZyRj2sLfYtjbUnrkyfwza7I78ca648/4IjV+FzY7sTXOfJXBoJoDkOelFadH6nTOkiEjbseb653ajDndiKZgAk0wB82LTlplaXutgioaFjWMqOYXakHYar5JpqceDbJXH5tgHb7leMYvXifHt2idcnBxw1odORc9h0jbm8aS1XdzXRRueegAXekhYrbrLNfZws1xg8Ixtu47C7E4Zcma6kmzl3jo6LW0dPfjaSQXUAfTzqCuG7aOQhbKw9BERAERabbe0zmz/CDA855F1OZY2kDcRY3ygFoJxcaDoBPsCyLcgIo3SelmwyQREi9LJdAqK0DSSaVruUksUk20AiItAREQBERAEREARfCqM2eRwDnWm0EkAm69jW1IqQG3DQICxa16Y/ZLO+UeGeLH6RyPQKnoXD55c3HE8u0n810TSFgbPQTSTvDa0vStwrn/wCPkWg7ViynMS7/ABjcxl8Bct9ErJcdD7Xw34lTskGnFuT89PYpSFozoFdv9NWbdL9I38Cf6as+6T12/gUP8KfVH0/xDR9D/b+SlL5exp09X6Cuv+mrP/E9dv4V8/0zZ6h3HqMjeb+FP8KXVD8Q0/RL9v5IDRVne4g5NG07WnMAbaZjpVtslkbGQ5uLhQgnHEcm5Ye9DfjJfXH4V7GjqYcNL64/CrVUTgsZPgfEdqr2qxWRjhmO1uoXHlr17K7edV7TMlQRtzKsUlhxAMj3VB8Ig0ptBoOanKqtpJl1zxWtK40p2LrdmFh8T5kjqerV42OzzNxdwTA4ecGinXh+sQZ6CYPF4f8A5yFQ+pPkFn+bHtK354zG7hGCo+G3fyjl/XKMXAouBuovEUgcA4GoP66Cva00Lnln0hd088EUDoXNwYR4vjYn4Rw7ArlrFazDZppRm1hIxpjsxodvIuTafnA0nDaWcUTMJBq1pImiccCccHOpsoVC2WuPcnN4wXDROnXT2uxNNQ18M8gxzNSPBIrg2mJ35K6PtLRfqfAFXcgoTXsPUuJ6r23grTo2ahum/E514Fo4zmUGOOQxVztGkz3xt0FcH2WrRlxo2mtL1QRQnHLHJeITcV/fQKemSA0bpp9q0jYi4k1dJJQFpaKl904UJ4tBiBl0nry/Pmq1rMVoZOangWFlflSSGJtaM9Ig5Gi/Qa9UeaNreUERF0HsIi8vbUEbxTrQFa0xp8xSUqQA5hAG1rSWyDlPJyBZ9C6UdPMa4BrZBTlD248uBA6DvVY0lZnMc6GSrjiWEnEHbic8MQedbepYvzFzsc6bgSKlfNhfN24fU5lN72C+IiL6R0hUWYUkkZ5j3Cm4Vq3+0hXpc+1qeYLa52x7WOI6Czr4nagMqLzFIHC801BXpaYERasbmv4S8595ri1rWkgAClCaZ1z6RRAbSLVsMpN9tahpoD0AkE7SFtIAiLR0jbwzitxd7PzQHqe0Cr6fAb2u2dg61Tre7F3V9ymmvpEflOJPM0AHtCr1sdgTvP5qEuLJSep2fU1tLDZvmmnrFVMqN1aju2Szt3QxD+xqklVFVwNCYcCTIPAPhjd8ofr7ltwTteKtNdh5DuI2LFpFgMbq7Bew3t4w7QFi0TZODZnUuocMABsABJPWdq0096Vs5khkjBoXMcAaVoSMMNq4I6Ujg4XhwdZZBQXWXjFevAurswIp8oYbF+hlynuoaqXD+2QsFKudID4Ir4Rf5wOPNjuCjbHOpK1eZTLfBSzSOqGyQWh10uo5zQaPFGjAca91Kefpemk22ylQ+zyuwoMDE5wFS454UwVdjtwLZ6ODGyxsNODxa+NzWkHc5weTygZL49pM7GFhwijabzGY04NrhgczR2fOoYIptP8AvQ2JGUaGtzktYoQXGrGubQVPyr2bdq/QwXDdXbN+1aSstnJvCH99KDQ0c2rjWrQR+8IGG5dyV6lq2Wp5QiIrFQiLXtVqDMM3bvvO4LG0uISyQcui2zceQlzquGJfhdJGADqDbkFq2jR7LMOEi4hFTUOfu21dQjnUkx7gKVGbnZecanbksdpiMgo4inIOzNS3q85xqeuz1yQNo7q9haKRiWXlDA0Hl/eEHsUce63xvI+Jv4bjdVynaqjpnUmdjnO4F10kmsNHNoTsjGLRyAYLV1S0SDbGRyRGdpvDgmv4N166SC6pGAoScR05E1Y+DR1U7X8OXdsjJPpLOvo1p+50+DupWItq8SsO0FgPa1xFFGa06bs9sMUkD7xDXBwLXNIxaW5jHN2Sk4NG8CeJZrBZTsLjwsh5fBZj0lR2sWiCb1sdO+R4DWkcFwbA3LBpFcKg1rvXtOS4sjbKmT/Ki16shrPaXRmrTzjYecKVg0u0+ECObEe9Qd8bx1pfG8daoQLOy1xnJ7ek09qx2izwyG866TvvUNN1QcQq5eG8daXhvCAsrJIoxdDmNAyAI9ixy6UjGRJ5h95VevDeOtL43jrQEjadKudg3ijt69i0F5vjeOteo23yGNOLiGjnOCA17bbWhgbXZs+Vicctqhppg+jW5nAc5wCv0moEDjUyynkqyn1VkbqJAKUkkBFCCLlQRiCOLnVcm+VdEOp0KCO61rRsAHUKLIooWyTe31fzXl+kXDNzBzin+St2sTNxm7pI8S6M3EAddSOoFbLRTBQMukbxbV7KNNa7A7ZXHdeW5ZtJ1PGLSN7dnOKnBb2iM3WSa8TRNe0tcAWnMEVBXoGuK8Wl1GOO5pPYvZ5OR6X7ndobMZLEKxv4z772tLhU0jI3AUo7kyWCPUK3tklnEMYdjwdJcCHF96uPFoDUHHjAHYuyRNo0DcAvRCm6osn2aKN3NNW3WPhHz+US02hwZG3JgeMXYmpryK9KMiNJGctR2EqTXtRxoe0sLCCIi000tMWswwukbSooBXLjODa9qq40y7O601zN449iuhCrWtGhIi2S0ltX8XMNIza3aNy574yaymWqlHg0aHfl3mt9Y+5O/R81vrLS0BomKeZ0b2i6GXhRrQa1bycpV30fo9kDBEwcUVpWm01OQUa65TWclbJRjpgqvfs+a31lgn0g15BfFG4jInEjmNKhXq4NwS4NwVewf1E+1j9JSYdKXcGRsaPkmnsCyd+XeY31j7lJ6f0vYAHQWhzHb2hpcQf6BxD0grmmlLPCX/7Uyuadj2gU5nV4w6B0rzKqS8zY218HoXTvn/CZ+uhO+f8ACZ+uhc5IpgcDtBz6kOIoVPdfUriPQ6N3z/hM/XQnfP8AhM/XQuV2mz0xGXsWhaLSI8yanIDP8l6jCUnhMyThFZZ2Pvn/AAmfroTvn/CZ+uhcYGkI9riP6Xe5bkWmIW5HpOHtXp02Lr+h5VlT4Nfqdb75/wAJn66F9bpSmIjYOY/kuVN0iHYtoeUOr7F4faHHb1Lxuy6nvu8Trffl3mN9Y+5fDpp3mt9Y+5clihc4gAEkkAAYkk4ADlJXc9T9Bix2ZkRAvnjyem6lRXaAKCvJVeo1SfmRd0M4SyQ3fo+a31vyWlaLSHuLyKE0rR+GGGRBXQLg3BLg3BUVMlwkHbF/Kc8vjl9cfhXuzyhjw8AkitKyGmIpkAApvT+rsAZNaLvHo5+IaRXPcoLQWi4ppGse0UIJNGtGw8ilJ2J7rfEpFVtb2CwaB0s58gioA0gmgNaEY4e786ztt8W/0T7EsdlbExsbBg0UGWXQvVqFWOHyT7F1VxcVhs5ptN5R9gfVoPIkz6D2KPhdgF6Xs8nkeGznUootmMrBznsKlEAREQBRes3kz/6frtUoozWTyaT+n6zV4nys9Q5kV/U/ymT5v72K5qm6neUSegPa1XJeNn5Cl/OERFYic71v1Hkc989m4we4vfHUBwcTeLmE4Gpxumm2m5UwzyRuuSMcHDPAtcOUsOI6F3daWlbDDKw8PG17WgnjAGlBUkHMHmXhxPDhngcgtdoElhtswo58MTLhu4tMsgaX0ORAa7HlKo9h1gfT94A75QGPSF1myaKYJHWRrXFlqjfFKy9k26SXtccQ5uQqdvSqFae5XpOKS5HE2VtaB4exuGwua9woeQXule6OysjiRlnbVY3TDDpNkgNMcNh9ozCrkst9xdvOHMMgp+fuf2yMg2iJ0Zxpwd19QKV4zXGmY61kdqqRFfFnlayleEDJaYnO84lua91Sqpm9cni92XQSawVpFPx6mWt+EMb5DjQOZcy+UTTdnRRumNEWmyGlps8kXK5tWdEjSWnoK74XQnwZ86Wz2R4ox6AnbHaomuaHRyPYyVu9j3XSQc2ubW8CNo3EhXi0aNkE77HFHfc17mhrBi+6aB7tjW5HHrVX1D0DJbLbA+44QMe2SR9DduxkODAfhOcQBQVONdi7Xq7bWvmMzRQSufXCho4ktvbyC0DpXz9rlHfR9HZq5Sr18jzqZqU2y0nmo+f4IHgx13b3fK6BtJuKIvCWCyWAiItNI/WDyab5t3sVY1R8c30D96tGnvJpvm3/AFSqzqh45voFc1viROivw5EjrxpK0QRxmzUvOfR1Wg8W645Hloqa7WnSm4fRsUx3YXuFnguuLTw4FQaYcFLh7OpUI6Of/wBmT9dK6jmOl2HWCMNAc2QGgrxNtMcitg6ww7pPoyuV973f9mTt96d73f8AZk7fegL3pvWOYUdZGuv1xL2Cl2hyBOdaKMZrTpTbT6NmPIqv3vd/2ZO33p3vd/2ZO33oDoepenLbPaTHaacHwb3DiNHGDowMRyFyvK5J3MWubpKSN0jnhtnk8I7b8GNOldbWGhRusXk8nR9YKSUdrB5PJzD6wXmfKz1DmRX9TfHy+g37lcVT9TPHS+g1XBT2fkPd/OERFYkFHaemuwkecQ3ozd/aHKRVY1xtgaANjWlx6cuxrh/Up2y3YNnutZkkYNT4L801oOTQIm85o+T/AAHWrcovVmxGGzRsd4RF9/pP4xHRWnQpRKo7sEjbJb0myB1rbxWH0h13T/itOyRX9Elu3gZKc7S4jtAUlrQ39007nf4uWLVBodYmNOR4QH6R4U8Zta6o95xWn9yJ1Ulq6I769sZP3K5EKg6nuIMQObXXTzgPZ94V/TZn3BtHOeGRNbk0DmACossRs9qljA+EJY+Z5vgcwkBCvqquusF10NpGw8G/mfi0nkDh/ctvjmOehlL72OpaI3hwDhkQCOY5L0o7QM16Fvyat6Bi0eqWqRVovKySaw8BERaYaOnPJpvmn/VKrGp3jh82faFaNNeTzfNSfVKrGpvjh80frNXNZ4kS9fhyNTux+TWf+YH2UqqUmfQPYFbe7H5NZ/5gfZSqp3HnHg+134V1HObLHWegvNlrQVo9gFdtBdyXq9ZvMm9dn4Fp8G/4vtd+FODf8X2u/CgNy9ZvMm9dn4FpPpU0rSuFc6bK8q+8G/4vtd+FfeDf8X2u/CgJTudf8rL/AC7/AK9nXV1yfub176S1FD+zvr69nXWFhoWhp7yeTmHtC31o6c8RJzfeF5nys9R4or2pfjZvRYreqjqT42b0Y/vVuU6ORHu7nYREViQVI0kP2m2Mhza6SrvQi8IcxLR6yuNtn4ON7/NaT0gYBVfUyz3pZpzjdpC081HSHrujoKhb3molq9E5FuREVyJGaxtrZ3chb9YA9hK1dST/ALRo3PmH/wBr1IaabWCXkaT6uP3KN1JP+3I3Sy/XJ+9Rfir0Krw/cgdHC5apWbrT2Pka4dhV9VF0mODt8p87gpOpt32sV6XmjTeX3Nu1w/sFo6bsPDwSQ7XNN3kcMWnocAt5FdrKwSTw8lW1Jtt9pacCWh1NxbxXe0DoVpVMgH7NpBzMmvcHt9GaoPQJKq5qVL7uH5FLubK8wiIrEjT0x4ib5t/1SqxqZ43/ANR+s1WnSviJfm3/AFSqvqX43/1H6zVz2eJEvDw5Gl3Y/JrP/MD7KVVObPob9UK2d2Pyaz/zA+ylVTmz6G/VC6TnAhd5p6inAO8x3qlZ2aRmAAErwBgAHEAAbKL730n+Ok9d3vQGvwDvNd6pXgimC2++k/x0nru961XuJJJNSTUneTmUBMdz3/lpvmJPtLOuqrlXc9/5ab5iT7Szrqqw0LS014iT0St1aemfES+g72LzLlZseKK9qT4yb0YvY5W1VPUnw5+aL2OVsU6ORFLudhERWJEFrjbBHZzynHmbxvaGjpW1q5YTBZo4z4VLz/Tfxndpp0KH1gb+0WyCzZtHHfzN47geQ0jH9StalHWbfsVlpBL3CIiqSMNsZeje3e1w6wQoLUZ1YJPnn9oafvVjUBqdZnRxytc0t/fOIqCKi4wVFcxUEdCnJd9P1KJ9xoiNcmXbUx/nwub0sdX/ACV1aaiqquvUdDZpN0jmeuwn/FWPR7qxRnexp62heYaWSNnrCJsIiKxIq2u9npwVoGF13BuPyZPBPQ8N9ZWOxz8Ixr/OaD1jJYdMWITwyQn4TSByOzaeg0PQo3Uu1mSzAHBzSQQc65ntvDoUlpZ6/wDCr1h6E8iIqkjW0kP3MnoP+qVV9SvGH5v/ACarVbx+6k9B3sKqupPhn5v72qFniRLQ8ORo92Tyaz/zA+ylVUN7ayPIZvINKCmFd1Fa+7H5NZ/5gfZSqpzZ9DfqhdBA+4+ZH9IfemPmR/SH3rYj0VM4BwicQRUHeDkV67zz/FO6kBq4+ZH9IfemPmR/SH3ra7zz/Eu6lpPYQSCKEGhHKMCgJXuck99Zb2f7O+vPfs66wuVdz3/lpvmJPtLOuqrDQsdohD2uYcnAg03EUWREBVtTW0ktA3cGOoPVpVe1Wsz2SWguY5oJZS8CK0vVpXPMKwqVKxBFLXmQREVSZEWDRTmWma0vIJeA1lK1Da1Na7cGD+lS6IsSS4Gtt8QiItMCIiAr2vTP9rf+Lkjd/cG+xylNCurBF6AHUKfcsWstmMtlmY0EuLHXQMy4YtAG+oCaugizxhwIPGwIIPhOpgeRSx+Z7FM/l+5JIiKpMKO0booQSSva40ldeu0waSSTTnJJ6VIosaTNywiItMMNs8W/0XewqvakWccGZca+DyUo09asdobVjgNoPsUNqdA5kBD2uab2TgQfBaMipSX5iKRfcZXe7H5NZ/5gfZSqrSROJBDSRRuQPmhWTu1vIssBAB/3AzNP/FLtouSd8JeX6V3uViRdeCf5ruopwT/Nd1FUrvhLy/Su9yd8JeX6V3uQF14J/mu6inAv813UVSu+EvL9K73J3wl5fpXe5AdJ7nv/AC03zEn2lnXVlxbuOzufpB5cP/jSY3iT4yDeF2lYaEREAREQBERAEREAREQBERAEREAREQBERAEREAREQGK0WZkgAkY14BqA5ocAd+K1+9Nn+Ii+jZ7kRAO9Nn+Ii+jZ7k702f4iL6NnuREA702f4iL6NnuTvTZ/iIvo2e5EQGWz2GKM3mRMaaUq1jQabqgZYDqWwiID/9k=" // Use the imported image as the src
      alt="Projects Image"
      style={{ width: "68%", height: "auto" }} // Adjust styling as needed
    />
  );
}
