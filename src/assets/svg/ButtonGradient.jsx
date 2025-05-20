const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />     {/* Azul forte (blue-500) */}
          <stop offset="50%" stopColor="#BFDBFE" />    {/* Azul claro (blue-200) */}
          <stop offset="100%" stopColor="#FFFFFF" />   {/* Branco */}
        </linearGradient>

        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFFFFF" />     {/* Branco */}
          <stop offset="100%" stopColor="#EFF6FF" />   {/* Branco azulado (blue-50) */}
        </linearGradient>

        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#EFF6FF" />     {/* Branco azulado */}
          <stop offset="100%" stopColor="#3B82F6" />   {/* Azul forte */}
        </linearGradient>

        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#BFDBFE" />     {/* Azul claro */}
          <stop offset="50%" stopColor="#EFF6FF" />    {/* Branco azulado */}
          <stop offset="100%" stopColor="#FFFFFF" />   {/* Branco */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
