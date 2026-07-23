export function lockBodyScroll()
{
    document.body.classList.add("overflow-hidden");
}

export function unlockBodyScroll()
{
    document.body.classList.remove("overflow-hidden");
}