class Configuration
{
  constructor(deepclone, deepmerge, deepfind, deepfreeze)
  {
    this.deepclone  = deepclone
    this.deepmerge  = deepmerge
    this.deepfind   = deepfind
    this.deepfreeze = deepfreeze
    this.config     = {}
  }

  extend(config)
  {
    const clone = this.deepclone.clone(config)
    this.config = this.deepmerge.merge(this.config, clone)
  }

  find(path)
  {
    return this.deepfind.find(path, this.config)
  }

  freeze()
  {
    this.config = this.deepfreeze.freeze(this.config)
  }
}

module.exports = Configuration
