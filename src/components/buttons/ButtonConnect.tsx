import React, { useEffect, useState } from 'react'
import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core'
import { styled } from "@stitches/react";

export const ButtonConnect = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  const { ens } = useLookupAddress(account)
  const [activateError, setActivateError] = useState('')
  const { error } = useEthers()
  useEffect(() => {
    if (error && account) {
      setActivateError(error.message)
      return
    }
    setActivateError('')
  }, [error, account])

  const activate = async () => {
    setActivateError('')
    activateBrowserWallet()
  }

  return (
    <Account>
      <ErrorWrapper>{activateError}</ErrorWrapper>
      {account ? (
        <>
          <AccountLabel>{ens ?? shortenAddress(account)}</AccountLabel>
        </>
      ) : (
        <ConnectButton onClick={activate}>CONNECT METAMASK</ConnectButton>

      )}

    </Account>
  )
}

const ErrorWrapper = styled('div',{
    color: '#ff3960',
})
const Account = styled('div',{
    display: 'flex',
    alignItems: 'center',
})

const AccountLabel = styled("div",{
    height: '32px',
    color:'#E75626',
    marginTop: '36px',
    position:'relative',
    left:'66vw'
})
  

const ConnectButton = styled("button",{
    width: 'auto',
    height: '50px',
    borderRadius: '25%',
    backgroundColor: '#E75626',
    position: 'relative',
    top: '10px',
    color: 'White',
    fontSize: '18px',
    padding: '5px 20px',
    left: '60vw'
  })
  export default ButtonConnect;
  